import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// This code heavily informed by the tutorial at https://www.w3schools.com/css/css_navbar.asp

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" exact activeClassName="active">
            Add New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    );
  }
}
