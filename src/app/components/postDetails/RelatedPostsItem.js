import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPostsItem = props => {
    const {postId, title} = props.relatedPost;
    return (
        <li><Link to={`/posts/${postId}`} className="grey-text text-darken-2">{title}</Link></li>
    )
};
export default RelatedPostsItem;