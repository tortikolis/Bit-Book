import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Feed } from './partials/Feed';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Feed />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
