import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsItem = (props) => {

    const { authorId, name } = props.author

    const filterPosts = () => {
        const posts = props.posts
        return posts.filter((post) => {
            return post.userId === authorId
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card #e0f2f1 #efebe9 brown lighten-5">
                        <div className="card-content ">
                            <Link to={`/authors/${authorId}`}> <span className="card-title grey-text text-darken-2">{name}</span>
                            <span className="grey-text text-darken-0.7">({filterPosts().length} posts)</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AuthorsItem };