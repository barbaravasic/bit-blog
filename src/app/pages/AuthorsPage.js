import React, {Component} from 'react';

import { AuthorsList } from '../components/authors/AuthorsList';
import { authorsServices } from '../../services/authorsServices';

class AuthorsPage extends Component{
    constructor() {
        super();
        this.state = {
            authors:[]
        }
    }

    componentDidMount() {
        authorsServices.fetchAuthors()
        .then(authors => {
            this.setState({
                authors
            })
        })
    }

    render() {
        return (
            <AuthorsList authors={this.state.authors}/>
        )
    }
}
export {AuthorsPage}