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
import Greeting from './navbar/logout_container';

const App = () => (
  <div>
    <header>
      <Link to="/" >
        <h1>UNCHEEZD</h1>
      </Link>
      <Greeting/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    </Switch>
  </div>
);

export default App;
