import Author from "../models/Author";
import { authorsEndpoint } from "../shared/constants";
import { storageServices } from "../shared/storageServices";


class AuthorsServices {

    fetchAuthors() {
        const authors = storageServices.getData("authors");

        if(!authors) {
            const authorsList = this.adaptAuthorsData(authors)
            return new Promise ((res, rej) => {
                res(authorsList)
            })
        } else {
            return fetch(authorsEndpoint)
                .then(response => response.json())
                .then(myResponse => {
                    const authorsList = this.adaptAuthorsData(myResponse)
                    storageServices.saveData("authors", authorsList)
    
                    return authorsList;
                })
        }
    }

    fetchSingleAuthor(id) {
        if (id === 11) {
            const myAuthor = new Author(id, "Pera", "peraperic", "blabla@bla.com", "neka ulica 12", "Beograd", "11000", "25461554", "Awesome Company", "He who dares wins");
            return new Promise((res, rej) => {
                res(myAuthor)
            })
        } else {
            const singleAuthorEndpoint = `${authorsEndpoint}/${id}`
            return fetch(singleAuthorEndpoint)
                .then(response => response.json())
                .then(myResponse => {
                    const newAuthor = this.createAuthorInstance(myResponse)
                    storageServices.saveData('singleAuthor', newAuthor)

                    return newAuthor
                })
        }
    }

    adaptAuthorsData(authorsData) {
        const myAuthorsData = authorsData.map(author => {
            return this.createAuthorInstance(author);
        })
        return myAuthorsData;
    }

    createAuthorInstance(author) {
        const { id, name, username, email, address, phone, company } = author;
        const street = address.street;
        const city = address.city;
        const zipcode = address.zipcode;
        const companyName = company.name;
        const slogan = company.catchPhrase
        const authorId = id;
        return new Author(authorId, name, username, email, street, city, zipcode, phone, companyName, slogan);
    }

    fetchRandomPicture(randomPictureEndpoint) {
        return fetch(randomPictureEndpoint)
            .then(response => response.json())
            .then(response => {
                const pictureSrc = response.results[0].picture.large;
                return pictureSrc;
            })
    }

    getAuthors() {
        const authors = storageServices.getData("authors");

        const adaptedAuthors = authors.map(author => {
            const { authorId, name, username, email, street, city, zipcode, phone, companyName, slogan } = author;
            return new Author(authorId, name, username, email, street, city, zipcode, phone, companyName, slogan)
        });
        return adaptedAuthors;
    }

    getSingleAuthor() {
        const singleAuthor = storageServices.getData("singleAuthor");

        const { authorId, name, username, email, street, city, zipcode, phone, companyName, slogan } = singleAuthor;
        return new Author(authorId, name, username, email, street, city, zipcode, phone, companyName, slogan)
    }
}

export const authorsServices = new AuthorsServices();