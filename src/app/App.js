import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'
import './App.css';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Feed } from './partials/Feed';
import { PostContent } from './partials/PostContent';
import { Profile } from './pages/userProfile/Profile';
import { PeoplePage } from './pages/People/PeoplePage';
import { UserPage } from './pages/UserPage';
import { LoginRegister } from './pages/Login/LogInRegister';
import { isUserLogged } from '../services/authService'


class App extends Component {


  componentDidMount() {
    M.AutoInit()
  }

  render() {
    console.log(this.props.location)
    return (
        isUserLogged()
        ? (
          <Fragment>
            <Header />
            <Switch>
              <Route path='/user/:id' component={UserPage} />
              <Route path='/post/:type/:id' component={PostContent} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/profile' component={Profile} />

              <Route path='/feed' component={Feed} />
              <Redirect path='/' to='/feed' />
            </Switch>
            <Footer />
          </Fragment>)
        : (
          <Switch>
            <Route exact path='/' component={LoginRegister} />
            <Redirect path='/' to='/' />
          </Switch>)

    )
  }
}

export default App;
