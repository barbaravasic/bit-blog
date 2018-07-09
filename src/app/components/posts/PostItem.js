import React from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../../services/postServices';
import { postsEndpoint } from '../../../shared/constants';

const PostItem = (props) => {
    const { title, body, postId, userId} = props.post; 

    const onDelete= (postId) => {
        postService.deletePost(postId, postsEndpoint)
            .then(response => window.location.reload())
    }
    const deleteButton = (userId) => {
        if(userId === 11){
            return  <button className="waves-effect  btn-large #00acc1 cyan darken-3 right" onClick={() => onDelete(postId)}>Delete</button>
        }
    } 
    return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card #d7ccc8 brown lighten-5">
                            <div className="card-content">
                                <span className="card-title "><Link to={`/posts/${postId}`} className="grey-text text-darken-3">{title}</Link></span>
                                <p className="grey-text text-darken-2">{body}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3 right">{deleteButton(userId)}</div>
                </div>
            </div>   
    );
};

export { PostItem };