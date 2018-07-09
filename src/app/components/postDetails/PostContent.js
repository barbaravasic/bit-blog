import React from 'react';
import AuthorName from './AuthorName';

const PostContent = (props) => {

    const { title, body, userId } = props.post;
    return (
        <div className="card-content  #d7ccc8 brown lighten-5">
            <h3>{title}</h3>
            <AuthorName authorId={userId} />
            <p>{body}</p>
        </div>
    );
}


export default PostContent;