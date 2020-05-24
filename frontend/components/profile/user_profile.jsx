import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    let that = this;
    this.props.requestAllUsers().then(function(value){
      that.setState({users: that.props.users});
    });
  }

  whichUser () {
    if (this.props.location.pathname === "/profile") {
      return this.props.currentUser;
    } else if (this.props.users) {
      return this.props.users[this.props.match.params.userId];
    }
    else {
      return null;
    }
  }

  render () {
    // if(!this.state) {
    //   return <div>Loading...</div>;
    // }
    const user = this.whichUser();
    console.log(user,"Louisa is very Lost");



    // const user = this.props.currentUser;
    return (
      <div className="profile-container">
        {user && user.username}: Your profile is coming soon!
      </div>
    );
  }


}

export default UserProfile;
