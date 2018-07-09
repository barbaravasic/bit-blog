import React, { Component } from 'react';
import { postService } from '../../../services/postServices';
import RelatedPostsItem from './RelatedPostsItem';

class RelatedPosts extends Component {
    constructor(props) {
        super(props);
        this.state= {
            relatedPosts: null
        }
        
    }

    componentDidMount(){
        const authorId = this.props.post.userId;
        postService.fetchRelatedPosts(authorId)
        .then(relatedPosts => {
            this.setState({
                relatedPosts
            })
        })
    }
    
    render() {

        if(!this.state.relatedPosts){
            return  <h3>...</h3>
        }
        const {relatedPosts} = this.state;
        return (
            <ul>
                {relatedPosts.map(relatedPost => {
                    return <RelatedPostsItem relatedPost={relatedPost} key={relatedPost.postId}/>
                })}
            </ul>
        );
    }
}

export default RelatedPosts;