
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
    <Link to="/" id="title">
      <h1>UNCHEEZD</h1>
    </Link>
    <h4 className="header-name">Hey there, {currentUser.username}!</h4>
    <Link to="/cheeseboard" className="cheeseboard">Cheese Board</Link>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</div>
);

const sessionLog = ({ currentUser, logout }) => (
  currentUser ? logoutButton(currentUser, logout) : null
);

export default sessionLog;
