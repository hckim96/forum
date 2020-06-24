import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { dataBase } from '../firebase';
import './MyPostDeletePopup.css';

// to know :  ref
//props ;;  postKey

const MyPostDeletePopup = (props) => {
    const [pw, setPW] = useState('');
    const handleChange = (e) => {
        setPW(e.target.value);
    };

    const deletePost = () => {
        dataBase
            .ref('posts/' + props.postKey)
            .remove()
            .then(() => {
                alert('post is deleted');
                window.location.href = '/posts';
            });
    };
    const handleButtonClick = () => {
        let postAuthorPW = 'default';
        dataBase.ref('posts/' + props.postKey).on('value', (snapshot) => {
            postAuthorPW = snapshot.val().password;
        });
        if (postAuthorPW) {
            if (postAuthorPW === pw) {
                deletePost();
            } else {
                alert('wrong password!');
            }
        } else {
            //when logged in user wrote this
        }
    };
    return (
        <div className='mpdp-wrapper'>
            <Popup
                className='post-delete-popup'
                trigger={<div className='post-delete-button'> Delete </div>}
                modal
                closeOnDocumentClick
            >
                {(close) => (
                    <div className='modal'>
                        <div className='close' onClick={close}>
                            &times;
                        </div>
                        <div className='mpdp-input'> input password</div>
                        <input value={pw} onChange={handleChange} />
                        <div
                            className='modal-delete-button'
                            onClick={handleButtonClick}
                        >
                            Delete!
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default MyPostDeletePopup;
