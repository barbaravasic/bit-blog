import React, { Fragment, Component } from 'react';

import { AuthorsItem } from './AuthorsItem';
import { postService } from '../../../services/postServices';
import { postsEndpoint } from '../../../shared/constants';

class AuthorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }

    }
    componentDidMount() {
        postService.fetchPosts(postsEndpoint)
            .then(receivedPosts => {
                this.setState({
                    posts: receivedPosts
                })
            })

    }
    render() {

        if(!this.state.posts) {
            return <h3>...</h3>
        }
        const { authors } = this.props
        return (
            <Fragment>
                <h2 className="center-align grey-text text-darken-2">Authors</h2>
                {authors.map((author) => {
                    return <AuthorsItem author={author} key={author.authorId} posts={this.state.posts}/>
                })}
            </Fragment>
        );

    }
}


export { AuthorsList };