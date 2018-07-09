import React, { Component } from 'react';
import { postService } from '../../services/postServices';
import PostContent from '../components/postDetails/PostContent';
import RelatedPostsList from '../components/postDetails/RelatedPostsList';
import { storageServices } from '../../shared/storageServices';

class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const postId = nextProps.match.params.postId;
        postService.fetchSinglePost(postId)
            .then(post => {
                this.setState({
                    post,
                })
            })
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        if(postId > 10) {
            storageServices.getData("createdPosts")
        }
        postService.fetchSinglePost(postId)
            .then(post => {
                this.setState({
                    post
                })
            })
    }

    render() {
        if (!this.state.post) {
            return <h1>Loading...</h1>
        }
        const { post } = this.state;
        return (
            <div className="container">
                <div className="card myCard">
                    <PostContent post={post} />
                    <div className="card-content #d7ccc8 brown lighten-4">
                        <RelatedPostsList post={post} />
                    </div>
                </div>
            </div>
        )
    }
}
export { PostDetailsPage };