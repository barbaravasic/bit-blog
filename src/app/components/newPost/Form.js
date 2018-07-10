import React, { Component } from 'react';
import { postService } from '../../../services/postServices';
import Link from 'react-router-dom/Link';
import { storageServices } from '../../../shared/storageServices';
import { authorsServices } from '../../../services/authorsServices';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            createdPosts: []
        }
    }

    onSave = (event) => {
        event.preventDefault();
        const titleValue = this.state.title;
        const contentValue = this.state.body;

        const myPost = {
            title: titleValue,
            body: contentValue,
            userId: 11
        }
        postService.createPost(myPost)
            .then(myResponse => {
                const createdPost = myResponse;
                const createdAuthor = authorsServices.createMyAuthor(createdPost.userId);
                storageServices.saveData("myAuthor", createdAuthor)
                const storedPosts = storageServices.getData("posts");
                storedPosts.push(createdPost);
                const allCreatedPosts = this.state.createdPosts;
                allCreatedPosts.push(createdPost);
                this.setState({
                    createdPosts: allCreatedPosts
                })
                storageServices.saveData("posts", storedPosts);
                // storageServices.saveData("createdPosts", this.state.createdPosts)
            })
        this.setState({
            title: "",
            body: ""
        })
    }

    handleChange = (event) => {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <h2 className="center-align grey-text text-darken-2">New Post</h2>
                            <input placeholder="Title" id="post-title" name="title" type="text" value={this.state.title} className="validate" onChange={this.handleChange} />
                            <label htmlFor="first_name"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="content" className="materialize-textarea" placeholder="Content" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                            <label htmlFor="textarea1"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 m3 l2">
                            <Link to="/"><button className="waves-effect  btn-large #00acc1 cyan darken-3 right" >Cancel</button></Link>
                        </div>
                        <div className="col s6 m3 l2">
                            <button className="waves-effect  btn-large #00acc1 cyan darken-3 right" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}