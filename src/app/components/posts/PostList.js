import React, { Fragment } from 'react';
import { PostItem } from './PostItem';

const PostList = (props) => {

    const filterSearchedList = (postList) => {
        const searchedList = postList.filter(post => {
            const postTitle = post.title.toLowerCase()
            return postTitle.includes(props.searchValue)
        })
        return searchedList
    }

    const renderPostList = () => {
        const postList = props.posts;
        if (props.searchValue !== "") {
            const searchedList = filterSearchedList(postList);

            return searchedList.map(post => {
                return (
                    <PostItem post={post} key={post.postId} />
                )
            })
        } else {
            return postList.reverse().map((post) => {
                return (
                    <PostItem post={post} key={post.postId} />
                )
            })
        }
    }
    return (
        <Fragment>

            <h2 className="center-align grey-text text-darken-2">Posts</h2>
            {renderPostList()}
        </Fragment>
    );
};

export { PostList };