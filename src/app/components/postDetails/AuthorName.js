import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { authorsServices } from '../../../services/authorsServices';

class AuthorName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: null
        }

    }

    componentDidMount() {
        authorsServices.fetchSingleAuthor(this.props.authorId)
            .then(author => {
                this.setState({
                    author
                });
            })
    }



    render() {
        if (!this.state.author) {
            return <h2>...</h2>
            
        }
        const {name, authorId} = this.state.author;
        return (
            <Link to={`/authors/${authorId}`}><h4 className="grey-text text-darken-1">{name}</h4></Link>
        );
    }
}

export default AuthorName;