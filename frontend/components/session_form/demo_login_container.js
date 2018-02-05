import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import DemoLogin from './demo_login';

const mapDispatchToProps = dispatch => {
  const formType = location.pathname.slice(1);
  return ({
    login: user => dispatch(login(user)),
    formType
  });
};

export default connect(
  null,
  mapDispatchToProps
)(DemoLogin);
