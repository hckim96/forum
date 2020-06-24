import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import './CommentForm.css';
import { dataBase } from '../firebase';

const CommentForm = (props) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleIDChange = (e) => {
    setID(e.target.value);
  };
  const handlePWChange = (e) => {
    setPW(e.target.value);
  };

  const [text, setText] = useState('');
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');

  const { isAuthenticated, user } = useAuth0();
  let name;
  if (isAuthenticated) {
    name = user.nickname;
  }

  return (
    <div>
      {!isAuthenticated && (
        <div className='comment-auth'>
          <input
            className='comment-id'
            value={id}
            placeholder='id'
            onChange={handleIDChange}
          ></input>
          <input
            className='comment-pw'
            value={pw}
            onChange={handlePWChange}
            placeholder='pw'
          ></input>
        </div>
      )}

      <div className='comment-footer'>
        <textarea
          rows='7'
          className='comment-text'
          onChange={handleChange}
          value={text}
          placeholder='comment text'
        ></textarea>
        <div
          className='create-comment-button'
          onClick={(e) => {
            if (!isAuthenticated && (id === '' || pw === '')) {
              e.preventDefault();
              alert('input temporary ID and temporary password');
            } else if (text === '') {
              e.preventDefault();
              alert('input text');
            } else {
              let today = new Date();
              const year = today.getFullYear();
              let month = today.getMonth() + 1;
              let date = today.getDate();
              let hour = today.getHours();
              let minute = today.getMinutes();
              let seconds = today.getSeconds();

              month =
                String(month).length === 1
                  ? (month = '0' + String(month))
                  : month;
              date =
                String(date).length === 1 ? (date = '0' + String(date)) : date;
              hour =
                String(hour).length === 1 ? (hour = '0' + String(hour)) : hour;
              minute =
                String(minute).length === 1
                  ? (minute = '0' + String(minute))
                  : minute;
              seconds =
                String(seconds).length === 1
                  ? (seconds = '0' + String(seconds))
                  : seconds;

              if (isAuthenticated) {
                dataBase.ref('comments/' + props.pid).push({
                  text: text,
                  nickname: name,
                  password: pw,
                  date: `${year}-${month}-${date} ${hour}:${minute}:${seconds}`,
                });
              } else {
                dataBase.ref('comments/' + props.pid).push({
                  text: text,
                  nickname: id,
                  password: pw,
                  date: `${year}-${month}-${date} ${hour}:${minute}:${seconds}`,
                });
              }
              let postKey;
              dataBase
                .ref('posts')
                .orderByChild('id')
                .equalTo(props.pid)
                .on('value', (snapshot) => {
                  snapshot.forEach((snap) => {
                    postKey = snap.key;
                  });
                });

              dataBase
                .ref('posts/' + postKey)
                .once('value')
                .then((snap) => {
                  if (snap.child('numOfComments').exists()) {
                    dataBase.ref('posts/' + postKey).update({
                      numOfComments: snap.val().numOfComments + 1,
                    });
                  } else {
                    dataBase.ref('posts/' + postKey).update({
                      numOfComments: 1,
                    });
                  }
                });

              setID('');
              setPW('');
              setText('');
            }
          }}
        >
          Post Comment
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
