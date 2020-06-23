import React from 'react';
import './PostLikeForm.css';
import { dataBase } from '../firebase';

// props  로 like 수 받을 것임.
//props post
const PostLikeForm = (props) => {
   
    const handleHateClick =  () => {
        let postKey;
         dataBase.ref('posts/').orderByChild('id').equalTo(props.post.id).on('value', snapshot => {
            snapshot.forEach(snap => {
                postKey = snap.key;
            })
            
        })
        dataBase.ref('posts/'+postKey).update({
            postLike: props.post.postLike - 1
        })
    }
    const handleLikeClick = () => {
        let postKey;
         dataBase.ref('posts/').orderByChild('id').equalTo(props.post.id).on('value', snapshot => {
            snapshot.forEach(snap => {
                postKey = snap.key;
            })
            
        })
        dataBase.ref('posts/'+postKey).update({
            postLike: props.post.postLike + 1
        })
    }
    return (
        <div className = 'post-like-form-wrapper'>
            <div className = 'post-like-form-like-number'>
                {props.post.postLike}
            </div>

            <div className = 'post-like-form-buttons-wrapper'>
                <div className = 'post-like-form-hate-button'
                    onClick = {handleHateClick}>

                    Hate
                </div>
                <div className = 'post-like-form-like-button'
                onClick = {handleLikeClick}>
                    Like
                </div>
            </div>
        </div>
    )
}

export default PostLikeForm;
