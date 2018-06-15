import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Feed } from './partials/Feed';
import { FeedList } from './partials/FeedList';
import { PostContent } from './partials/PostContent';

import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/post/:type/:id' component={PostContent} />
          <Route path='/' component={FeedList} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
