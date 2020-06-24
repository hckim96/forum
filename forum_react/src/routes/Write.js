import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Write.css';
import { useAuth0 } from '../react-auth0-spa';

const Write = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tmpID, setTmpID] = useState('');
  const [tmpPW, setTmpPW] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setBody(e.target.value);
  };
  const handleIDChange = (e) => {
    setTmpID(e.target.value);
  };
  const handlePWChange = (e) => {
    setTmpPW(e.target.value);
  };

  const { user } = useAuth0();
  let nickname = 'default name';
  let isloggedIn = false;

  if (!!user) {
    nickname = user.nickname;
    isloggedIn = true;
  }

  return (
    <div className='write-wrapper'>
      <div>
        {!isloggedIn && (
          <div className='tmp-form'>
            <input
              className='tmp-id'
              placeholder='temporary - id'
              value={tmpID}
              onChange={handleIDChange}
            ></input>
            <input
              className='tmp-pw'
              placeholder='temporary - pw'
              value={tmpPW}
              onChange={handlePWChange}
            ></input>
          </div>
        )}
      </div>
      <div>
        <input
          className='write-title'
          placeholder='title'
          value={title}
          onChange={handleChange}
        ></input>
      </div>
      <div className='ab'>
        <textarea
          className='write-body'
          rows='30'
          placeholder='body'
          value={body}
          onChange={handleChange2}
        ></textarea>
      </div>
      <div className='write-tail'>
        <Link
          to='/posts'
          className='write-button'
          onClick={(e) => {
            if (nickname === 'default name' && (tmpID === '' || tmpPW === '')) {
              e.preventDefault();
              alert('input temporary ID and temporary password');
            } else {
              props.onCreate(
                { title: title, body: body },
                nickname,
                tmpID,
                tmpPW
              );
            }
          }}
        >
          POST!
        </Link>
      </div>
    </div>
  );
};

export default Write;
