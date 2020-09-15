import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLoginAuthedUser } from "../actions/shared";

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
        <p>Login</p>
        <form onSubmit={this.handleSubmit}>
          <label for="login">Please log in</label>
          <select
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
