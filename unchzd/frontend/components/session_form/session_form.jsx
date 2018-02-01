import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up here</Link>;
    } else {
      return <Link to="/login">log in here</Link>;
    }
  }

  setRedirect () {
     this.setState({
       redirect: true
     });
   }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
  }


  render() {
    let emailInput;
    let submitButton = "Sign In";
    let formType = "log in";
    if (this.props.formType !== 'login') {
      emailInput = <input type="text"
        placeholder="  📧   |   Email Address"
        value={this.state.email}
        onChange={this.update('email')}
        className="login-input"
        />;
      submitButton = "Create Account";
      formType = "sign up";
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div id="x">
            {this.renderRedirect()}
            <img className="xMark"
              onClick={this.setRedirect}
              src="http://i66.tinypic.com/t03s43.jpg"/>
          </div>
          <h1>UNCHEEZD</h1>
          <h6>🧀 🧀 🧀 🧀 🧀</h6>

          <div id="navlink">
            Please {formType} or {this.navLink()}
          </div>

          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="  👤   |   Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <label>
              {emailInput}
            </label>
            <label>
              <input type="password"
                placeholder="  🔒   |   Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <div id="session-submit">
              <input className="session-submit"
                type="submit"
                value={submitButton} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
