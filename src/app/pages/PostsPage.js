import React, { Component, Fragment } from 'react';
import { PostList } from '../components/posts/PostList';
import { postService } from '../../services/postServices';
import { postsEndpoint } from "../../shared/constants";
import Search from '../components/posts/Search';
import { storageServices } from '../../shared/storageServices';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            searchValue:"" 
        }
    }

    componentDidMount() {
        const storedPosts = storageServices.getData("posts");
        if (storedPosts) {
            this.setState({
                posts: storedPosts
            })
        } else {
            postService.fetchPosts(postsEndpoint)
                .then(myPosts => {
                    this.setState({
                        posts: myPosts
                    })
                })
        }
    }

    onSearch = (event) => {
        const inputValue= event.target.value;
        this.setState({
            searchValue: inputValue.toLowerCase()
        })
    }

    render() {

        if(!this.state.posts) {
            return <h3>Loading...</h3>
        }
        return (
            <Fragment>
                <Search onSearch={this.onSearch} searchValue={this.state.searchValue} />
                <PostList posts={this.state.posts} searchValue={this.state.searchValue}/>
            </Fragment>
        );
    }
}

export { PostsPage }