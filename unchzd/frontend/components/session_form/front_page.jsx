import React from 'react';
import { Link, Switch } from 'react-router-dom';
import SessionLog from '../navbar/logout_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_utils';

import SessionFormContainer from './session_form_container';

const frontPage = () => {
  return (
    <header id='masthead'>
      <nav className="login-signup">
        <Link to="/login" className="session-button">Sign In</Link>
        <Link to="/signup" className="session-button">Create an Account</Link>
      </nav>
      <span>
        <div id="welcome-sign">
          <Link to="/" id="title">
            <h1>UNCHEEZD</h1>
          </Link>
          <h6>CHEESE OUT</h6>
          <h3>Discover and share your favorite cheeses.</h3>
        </div>
      </span>
    </header>
  );
};

export default frontPage;
