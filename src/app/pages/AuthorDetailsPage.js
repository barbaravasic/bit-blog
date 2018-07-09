import React, { Component } from 'react';
import { authorsServices } from '../../services/authorsServices';
import { AuthorDetails } from '../components/authorDetails/AuthorDetails';

class AuthorDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null
        }
    }

    componentDidMount(){
        let authorId = this.props.match.params.authorId;

        authorsServices.fetchSingleAuthor(authorId)
        .then(author => {
            this.setState({
                author:author
            })
        })
    }

    render() {
        if(!this.state.author) {
            return <h4>...</h4>
        }
        const {author} = this.state;
        return (
            <AuthorDetails author={author} />
        )
    }
}

export {AuthorDetailsPage}