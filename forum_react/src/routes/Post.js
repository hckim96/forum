import React, {Component} from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Post.css';
import { dataBase } from '../firebase';
import PostLikeForm from '../components/PostLikeForm';

//prop : post, postid
class Post extends Component {
    
    state = {
        comments : [],
    }

    componentDidMount() {


        dataBase.ref('comments/' + this.props.post.id).on('value', snapshot => {
            let comments = [];

            snapshot.forEach(snap => {
                comments.push(snap.val())
            })
            this.setState({comments});
        })
        // let postKey=1;

        // if (!this.props.post) {
        //     dataBase.ref('/posts').orderByChild('id').equalTo(this.props.postid).on('value',snapshot => {
        //         snapshot.forEach(snap => {postKey = snap.key})
        //         dataBase.ref('/posts/'+ postKey).on('value', snap => {
        //             this.post = {title: 'abcd', id: 13}
        //         })
        //     })
        //     alert(postKey);
            
        // } else {
        //     this.post = this.props.post;
        // }

      }
    
      
    render(){
        const{post} = this.props
        return(

            <div className = "post-wrapper">
                <h1 className = "title">
                    {post.title}
                </h1>
                <div className = "body">
                    {post.body}
                </div>
                <div className = 'post-post-like-wrapper'>
                    <PostLikeForm 
                    post = {post}/>
                </div>
                <div className = "comment">
                    <div className = 'comment-header'>
                        Comments ({post.numOfComments ? post.numOfComments : 0})
                    </div>
                    <div className = ''>
                    <CommentForm pid = {post.id}/>
                    <div className = 'comment-commentlist'><CommentList pid = {post.id} comments = {this.state.comments}/></div> 
                    </div>
                </div>
            </div>
        )
    }
}


export default Post;