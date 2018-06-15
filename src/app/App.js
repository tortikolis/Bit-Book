import React, { Component, Fragment } from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Feed } from './partials/Feed';

import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'
import './App.css';


class App extends Component {


  componentDidMount() {

    M.AutoInit()

  }

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
