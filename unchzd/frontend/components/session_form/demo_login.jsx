import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class demoLogin extends React.Component {
  constructor (props) {
    super(props);
  }

  handleButton (e) {
    e.preventDefault();
    this.props.login({user: {username: "guest", password: "password"}});
  }


  render () {
    console.log(this.props.formType);

      return (
        <div>
          <button
            onClick={this.handleButton.bind(this)}
            className="session-submit"
            id="session-submit2">
            Demo Login
          </button>
        </div>
      );
    }
  }


export default demoLogin;
