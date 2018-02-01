import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import SessionLog from './navbar/logout_container';

const App = () => (
  <div id="App">
    <header id='masthead'>

      <SessionLog />
      <span>
        <div id="welcome-sign">
          <Link to="/" id="title">
            <h1>UNCHEEZD</h1>
          </Link>
          <h6>CHEESE OUT</h6>
          <h3>Discover and share your favorite cheeses.</h3>
        </div>
      </span>
      <div id="login-form">
        <Switch>
          <AuthRoute exact path="/login" component={SessionFormContainer}/>
          <AuthRoute exact path="/signup" component={SessionFormContainer}/>
        </Switch>
      </div>
    </header>


  </div>
);

export default App;

// <img id='masthead' src='http://i64.tinypic.com/3538hme.jpg' />
