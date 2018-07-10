import Post from "../models/Post";
import { postsEndpoint } from "../shared/constants";
import { storageServices } from "../shared/storageServices";


class PostServices {

    fetchPosts() {
        const myAuthor = storageServices.getData("myAuthor");

        if (myAuthor) {
            const postsList = storageServices.getData("posts");
            return new Promise((res, rej) => {
                res(postsList)
            })
        } else {
            return fetch(postsEndpoint)
                .then(response => response.json())
                .then(myData => {
                    const postsList = this.adaptPostData(myData)
                    storageServices.saveData("posts", postsList)
                    return postsList
                })
        }
    }

    fetchRelatedPosts(id) {
        if (id === 11) {
            const posts = this.getPosts();
            const relatedPosts = posts.filter(post => {
                return post.userId === id;
            })
            return new Promise((res, rej) => {
                res(relatedPosts)
            })
        } else {
            const relatedPostsEndpoint = `${postsEndpoint}?userId=${id}`
            return fetch(relatedPostsEndpoint)
                .then(response => response.json())
                .then(myData => {
                    const postsList = this.adaptPostData(myData)

                    return postsList
                })
        }
    }

    fetchSinglePost(id) {
        if (id > 1000) {
            const posts = this.getPosts();
            const myPost = posts.filter(post => {
                return post.id === id;
            })
            return new Promise((res, rej) => {
                res(myPost[0])
            })
        } else {

            const singlePostEndpoint = `${postsEndpoint}/${id}`
            return fetch(singlePostEndpoint)
                .then(response => response.json())
                .then(data => this.createPostInstance(data)
                )
        }
    }

    adaptPostData(postData) {
        const myPostData = postData.map(post => {
            return this.createPostInstance(post);
        })
        return myPostData;
    }

    createPostInstance(post) {
        let { title, body, id, userId } = post;
        title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
        body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`;
        let myPostId = 0;
        if (id === 101) {
            myPostId = Math.floor((Math.random() * (10000 - 1000)) + 1000);
            return new Post(title, body, myPostId, userId);
        } else {
            return new Post(title, body, id, userId);
        }
    }

    createPost(myPost) {
        return fetch(postsEndpoint, {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((myPost) => {

                return this.createPostInstance(myPost)
            })
    }


    // deletePost(postId, postsEndpoint) {
    //     return fetch(`${postsEndpoint}/${postId}`, {
    //         method: 'DELETE'
    //     })
    // }

    deleteFromLocalStorage(id) {
        const createdPosts = this.getPosts();

        const filteredPosts = createdPosts.filter(post => {
            return post.id !== id;
        })

        return filteredPosts;
    }


    getPosts() {
        const posts = storageServices.getData("posts");
        const adaptedPosts = this.adaptPostData(posts);

        return adaptedPosts;
    }

}

export const postService = new PostServices();