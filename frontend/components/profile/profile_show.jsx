import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  render () {
    const user = this.state.user;
    return (
      <div>
        user.username
      </div>
    );
  }


}
