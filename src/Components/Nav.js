import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../Redux/actions";

const Nav = props => {
  const handleLogout = () => {
    const { logoutUserFromStore } = props;
    logoutUserFromStore();
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
      <p>{props.user ? props.user.username : null}</p>
    </nav>
  );
};

const mapStateToProps = state => ({ user: state });
const mapDispatchToProps = {
  logoutUserFromStore: userActions.logoutUserFromStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
