
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="session-button">Sign In</Link>
    <Link to="/signup" className="session-button">Create an Account</Link>
  </nav>
);

const logoutButton = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hey there, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const sessionLog = ({ currentUser, logout }) => (
  currentUser ? logoutButton(currentUser, logout) : null
);

export default sessionLog;
