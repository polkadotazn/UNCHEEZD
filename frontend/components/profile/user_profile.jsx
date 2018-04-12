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
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    console.log(that.props.users, "USERS");
    that.setState({users: that.props.users});
});


  }

  whichUser () {
    console.log("LOCATION",this.props.location.pathname);
    if (this.props.location.pathname === "/profile") {
      return this.props.currentUser;
    } else if (this.props.users) {
      return this.props.users[this.props.match.params.userId];
    }
    else {
      return undefined;
    }
  }

  render () {
    // if(!this.state) {
    //   return <div>Loading...</div>;
    // }
    console.log(this.state);
    console.log(this.props);
    const user = this.whichUser();
    console.log(this.props.users,"Props");
    console.log(user,"Louisa is very Lost");



    // const user = this.props.currentUser;
    return (
      <div>
        {user && user.username}
      </div>
    );
  }


}

export default UserProfile;
