import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PostsPage } from './pages/PostsPage';
import { NewPostPage } from './pages/NewPostPage';
import { AuthorDetailsPage } from './pages/AuthorDetailsPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { AboutPage } from './pages/AboutPage';
import { PostDetailsPage } from './pages/PostDetailsPage';




export const App = () => {

  return (
    <Fragment>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={PostsPage} />
          <Route exact path='/posts/new' component={NewPostPage} />
          <Route path='/posts/:postId' component={PostDetailsPage} />
          <Route path='/authors/:authorId' component={AuthorDetailsPage} />
          <Route path='/authors' component={AuthorsPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

