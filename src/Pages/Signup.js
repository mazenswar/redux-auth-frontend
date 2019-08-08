import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../Redux/actions";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    // const { createNewUserToDB } = this.props;
    this.props.createNewUserToDB(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h2>Signup</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
          />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />
          <input type="submit" />
        </form>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = {
  createNewUserToDB: userActions.createNewUserToDB
};

const mapStateToProps = state => ({ user: state });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
