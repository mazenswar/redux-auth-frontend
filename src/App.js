import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "./Redux/actions";
import Routes from "./Routes";
import Nav from "./Components/Nav";
import "./Stylesheets/style.scss";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.token) {
      const { persistUserFromDB } = this.props;
      persistUserFromDB();
    }
  }

  render() {
    return (
      <Router>
        <Nav />
        <Routes />
      </Router>
    );
  }
}

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = {
  persistUserFromDB: userActions.persistUserFromDB
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
