import React from 'react';
import './CommentList.css';


const CommentList =  (props) => {
    const Comment = (props) => {

      return (
        <div className = 'comment-list-comment-wrapper'>
            <div className = 'comment-list-comment-header'>
            {props.nickname}
            </div>
            <div className = 'comment-list-comment-body'>
            {props.text}
            </div>
            <div className = 'comment-list-comment-footer'>
            {props.date}
            </div>
            
            
        </div>
      );
    };

  
   const commentList = props.comments.map(({ nickname, password, text, date }) => (
    <Comment key= {date} nickname={nickname} password={password} text={text} date={date} />
  ));

  return <div className = 'comment-list-wrapper'>{props.comments.length !== 0 && <div>{commentList}</div>}</div>;
//   return <div></div>
};

export default CommentList;
/*

코멘트 { post id : 
text:
writer:

}
*/
