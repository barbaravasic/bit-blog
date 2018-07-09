import React, {Component} from 'react';

import { AuthorsList } from '../components/authors/AuthorsList';
import { authorsServices } from '../../services/authorsServices';
import { authorsEndpoint } from '../../shared/constants';

class AuthorsPage extends Component{
    constructor() {
        super();
        this.state = {
            authors:[]
        }
    }

    componentDidMount() {
        authorsServices.fetchAuthors(authorsEndpoint)
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