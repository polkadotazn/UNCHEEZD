import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      console.log('RECEIVE_NEW_PROPS');
      console.log(nextProps);
      console.log(this.props);
      if(this.props.match.path === nextProps.match.path){
        this.setState({errors: nextProps.errors});
      }
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
    console.log(this.props.errors);
  }

  navLink () {
    if (this.props.formType === 'login') {
      return <Link  to="/signup">sign up here</Link>;
    } else {
      return <Link to="/login">log in here</Link>;
    }
  }

  errors () {
    if (this.state.errors) {
      return (
        this.state.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  setRedirect () {
     this.setState({
       redirect: true,
       errors: null
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
    let navLink = <div id="navlink">
      Please {formType} or {this.navLink()}
    </div>;
    let seshErr = <div id="sesh-error">
          {this.errors()}
      </div>;
    let navOrSesh = navLink;
    if (!this.state.errors || this.state.errors.length === 0) {
      console.log("IS IT WORKING");
      seshErr = "";
      navOrSesh = navLink;
    } else {
      navLink = "";
      navOrSesh = seshErr;
    }
    console.log("wsup");
    console.log(this.state.errors);
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
          {navOrSesh}
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
