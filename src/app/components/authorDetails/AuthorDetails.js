import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { authorsServices } from '../../../services/authorsServices';
import { randomPictureEndpoint } from '../../../shared/constants';

export class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            pictureSrc: ""
        }
        
    }

    componentDidMount() {
        authorsServices.fetchRandomPicture(randomPictureEndpoint)
        .then(pictureSrc => {
            this.setState({
                pictureSrc
            })
        })
    }

    render() {
            const { name, username, email, street, city, zipcode, latitude, longitude, phone, companyName, slogan } =this.props.author
        return (
            <div className="container ">
                <h2 className="center-align" ><Link to="/authors" className="left"><button className="waves-effect waves-light btn-small">All authors</button></Link>Single Author</h2>
                <div className="row">
                    <div className="col s6">
                        <img src={this.state.pictureSrc} alt="" />
                    </div>
                    <div className="col s6">
                        <h3>{name}</h3>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row section">
                    <div className="col s6">
                        <h4>Adress</h4>
                        <p>Street: {street}</p>
                        <p>City: {city}</p>
                        <p>Zipcode: {zipcode}</p>
                    </div>
                    <div className="col s6">
                        <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11352.759546921312!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1528560949657`} frameBorder="0" allowFullScreen title="singleAuthor"></iframe>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row section">
                    <div className="col s6">
                        <h4>Company</h4>
                        <p>Company name: {companyName}</p>
                        <p>Slogan: {slogan}</p>
                    </div>
                </div>
            </div>
        )
    }
} 