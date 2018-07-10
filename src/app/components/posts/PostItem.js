import React from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../../services/postServices';
import { storageServices } from '../../../shared/storageServices';

const PostItem = (props) => {
    const { title, body, id, userId } = props.post;

    const onDelete = (id) => {
        const filteredPosts = postService.deleteFromLocalStorage(id)
        storageServices.saveData("posts", filteredPosts);
    }

    const deleteHandler = (event) => {
        event.preventDefault();
        onDelete(id);
        const filteredPosts = props.allPosts.filter(post => {
            return post.userId === userId;
        })
        if(filteredPosts.length === 1){
            localStorage.removeItem("myAuthor");
        }
        window.location.reload();
    }

    const deleteButton = (userId) => {
        if (userId === 11) {
            return <button className="waves-effect  btn-large #00acc1 cyan darken-3 right" onClick={deleteHandler}>Delete</button>
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card #d7ccc8 brown lighten-5">
                        <div className="card-content">
                            <span className="card-title "><Link to={`/posts/${id}`} className="grey-text text-darken-3">{title}</Link></span>
                            <p className="grey-text text-darken-2">{body}</p>
                        </div>
                    </div>
                </div>
                <div className="col s3 right">{deleteButton(userId)}</div>
            </div>
        </div>
    );
}

export { PostItem }