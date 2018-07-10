import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPostsItem = props => {
    const {id, title} = props.relatedPost;
    
    return (
        <li><Link to={`/posts/${id}`} className="grey-text text-darken-2">{title}</Link></li>
    )
};
export default RelatedPostsItem;