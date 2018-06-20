import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

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
import { LoginRegister } from './pages/Login/LogInRegister'


class App extends Component {


  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <Fragment>
        {window.location.href !== "http://localhost:3000/#/login" && <Header /> }
        <Switch>
          <Route path='/user/:id' component={UserPage} />
          <Route path='/post/:type/:id' component={PostContent} />
          <Route path='/people' component={ PeoplePage } />
          <Route path='/profile' component={Profile}/>
          <Route path='/login' component={LoginRegister} />
          <Route path='/' component={Feed} />
        </Switch>
        {window.location.href !== "http://localhost:3000/#/login" && <Footer /> }
      </Fragment>
    );
  }
}

export default App;
