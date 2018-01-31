import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
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

const App = () => (
  <div>
    <header>
      <Link to="/" >
        <h1>UNCHEEZD</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    </Switch>
  </div>
);
