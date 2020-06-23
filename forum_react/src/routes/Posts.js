import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';
import { dataBase } from '../firebase';

class Posts extends Component {
  render() {
    const { isRestricted } = this.props;
    let testlist = this.props.posts.map(
      ({ id, text, title, date, author, views, numOfComments,postLike }) => (
        <Link
          className='post-list-link'
          key={id}
          to={{ pathname: `/posts/${id}` }}
          onClick={async () => {
            let postKey;
            await dataBase
              .ref('/posts')
              .orderByChild('id')
              .equalTo(id)
              .on('value', (snapshot) => {
                snapshot.forEach((snap) => {
                  postKey = snap.key;
                });
              });
            if (!views) {
              await dataBase.ref('/posts/' + postKey).update({
                views: 1,
              });
            } else {
              await dataBase.ref('/posts/' + postKey).update({
                views: views + 1,
              });
            }
          }}
        >
          <div className='post-list'>
            <div className='top'>
              <div className='post-id'>#{id}</div>
            </div>
            <div className='middle'>
        <div className='post-title'>{title} {numOfComments && (<span className = 'numofcomments'>[{numOfComments}] </span>) }</div>
            </div>
            <div className='bottom'>
              <div className='bottom-top'>
                <div className='post-author'>{author}</div>
              </div>
              <div className='bottom-bottom'>
                <div className = 'post-likes'>postLike: {!postLike ? 0 : postLike}</div>
                <div className='post-views'>views: {!views ? 0 : views}</div>
                <div className='post-date'>{date}</div>
              </div>
            </div>
          </div>
        </Link>
      )
    );
    if (isRestricted) {
      testlist = testlist.slice(-5);
    }
    return (
      <div className='posts-wrapper'>
        <div className='posts-header'>
          <div className='posts-header-no'>NO.</div>
          <div className='posts-header-title'>Title</div>
          <div className='posts-header-author-date'>Author/Date</div>
        </div>
        <div className='posts'>{testlist.reverse()}</div>
        <div className='post-tail'>
          <Link
            className='post-link'
            to={{ pathname: '/post', state: { posts: this.props.posts } }}
          >
            POST
          </Link>
        </div>
      </div>
    );
  }
}

export default Posts;
