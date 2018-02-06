
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="session-button">Sign In</Link>
    <Link to="/signup" className="session-button">Create an Account</Link>
  </nav>
);

const logoutButton = (currentUser, logout) => (
	<div className="inner-navbar">
    <div className="func-navbar">
      <div className="left-nav">
        <Link to="/" id="title">
          <h1>UNCHEEZD</h1>
        </Link>
        <Link to="/cheeseboard" className="cheeseboard">Cheese Board</Link>
      </div>

      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
	</div>
);

const sessionLog = ({ currentUser, logout }) => (
  currentUser ? logoutButton(currentUser, logout) : null
);

export default sessionLog;
