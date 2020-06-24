import React, { Component } from 'react';

import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import './Post.css';
import { dataBase } from '../firebase';
import PostLikeForm from '../components/PostLikeForm';
import { Link } from 'react-router-dom';
import MyPostDeletePopup from '../components/MyPostDeletePopup';

//prop : post, postid
class Post extends Component {
    state = {
        comments: [],
    };
    postKey = '';

    componentDidMount() {
        dataBase
            .ref('comments/' + this.props.post.id)
            .on('value', (snapshot) => {
                let comments = [];

                snapshot.forEach((snap) => {
                    comments.push(snap.val());
                });
                this.setState({ comments });
            });

        dataBase
            .ref('/posts')
            .orderByChild('id')
            .equalTo(this.props.post.id)
            .on('value', (snapshot) => {
                snapshot.forEach((snap) => {
                    this.postKey = snap.key;
                });
            });
    }

    render() {
        const { post } = this.props;
        return (
            <div className='post-wrapper'>
                <h1 className='title'>{post.title}</h1>
                <div className='body'>{post.body}</div>
                <div className='post-nav-bar'>
                    <Link to='/posts' className='post-nav-bar-link'>
                        posts
                    </Link>
                    <MyPostDeletePopup
                        postid={this.props.postid}
                        postKey={this.postKey}
                    />
                </div>
                <div className='post-post-like-wrapper'>
                    <PostLikeForm post={post} />
                </div>
                <div className='comment'>
                    <div className='comment-header'>
                        Comments ({post.numOfComments ? post.numOfComments : 0})
                    </div>
                    <div className=''>
                        <CommentForm pid={post.id} />
                        <div className='comment-commentlist'>
                            <CommentList
                                pid={post.id}
                                comments={this.state.comments}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
