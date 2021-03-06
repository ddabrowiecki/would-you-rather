import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";

// This code heavily informed by the tutorial at https://www.w3schools.com/css/css_navbar.asp

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export class NavBar extends Component {
  render() {
    const { users, authedUser } = this.props;
    return (
      <ul className="nav-bar">
        <li>
          <NavLink className="home-tab" to="/" exact activeClassName="active">
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="add-question-tab"
            to="/add"
            exact
            activeClassName="active"
          >
            Add New Question
          </NavLink>
        </li>
        <li>
          <NavLink
            className="leaderboard-tab"
            to="/leaderboard"
            exact
            activeClassName="active"
          >
            Leaderboard
          </NavLink>
        </li>
        <li>Hey there, {users[authedUser].name}</li>
        <li>
          <NavLink
            className="logout-tab"
            to="/"
            exact
            activeClassName="active"
            onClick={() => this.props.dispatch(logoutAuthedUser())}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
