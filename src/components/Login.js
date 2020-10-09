import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLoginAuthedUser } from "../actions/shared";
import would from "./wouldyourather.png"

export class Login extends Component {
  state = {
    id: "",
  };

  handleLoginUser = (e) => {
    e.preventDefault();
    this.setState({
      id: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleLoginAuthedUser(this.state.id));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-image">
            <img src={would} className="would-you" alt="None found"></img>
          </div>
          <div className="login-form-text">
            <label for="login">Please log in</label>
            <select
              className="login-dropdown"
              id="login"
              name="login"
              value={this.props.value}
              onChange={this.handleLoginUser}
            >
              <option value={null}></option>
              <option value="tylermcginnis">Tyler</option>
              <option value="sarahedo">Sarah</option>
              <option value="johndoe">John</option>
            </select>
            <button className="login-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
