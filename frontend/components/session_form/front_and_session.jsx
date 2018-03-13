import React from 'react';
import { Link, Switch } from 'react-router-dom';
import SessionLog from '../navbar/logout_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_utils';

import SessionFormContainer from './session_form_container';
import FrontPage from './front_page';

class FrontAndSession extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <FrontPage />
        <div id="login-form">
          <SessionFormContainer
            formType={this.props.location.pathname.slice(1)} />
        </div>
      </div>
    );
  }

}

export default FrontAndSession;
