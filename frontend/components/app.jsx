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

import FrontAndSession from './session_form/front_and_session';
import FrontPage from './session_form/front_page';
import SessionFormContainer from './session_form/session_form_container';
import SessionLog from './navbar/logout_container';
import CheeseIndexContainer from './cheese/cheese_index_container';
import AddCheeseContainer from './cheese/add_cheese_container';
import CheeseShowContainer from './cheese/cheese_show_container';
import ReviewIndexContainer from './reviews/review_index_container';

const App = () => (
  <div id="App">
    <SessionLog />
    <Switch>
      <AuthRoute exact path="/" component={FrontPage} />
      <AuthRoute exact path="/login" component={FrontAndSession} />
      <AuthRoute exact path="/signup" component={FrontAndSession} />
      <ProtectedRoute exact path="/cheeseboard"
        component={CheeseIndexContainer} />
      <ProtectedRoute exact path="/cheeseboard/new"
        component={AddCheeseContainer} />
      <ProtectedRoute exact path="/cheeseboard/:cheeseId"
        component={CheeseShowContainer} />
      <ProtectedRoute path="/cheeseboard/:cheeseId/edit"
        component={AddCheeseContainer} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default App;

// <img id='masthead' src='http://i64.tinypic.com/3538hme.jpg' />