import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChangingAuthedUser } from "../actions/shared";

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangingAuthedUser,
  };
};

export class Login extends Component {
  state = {
    id: "",
  };

  handleChangeUser = (e) => {
    e.preventDefault();
    this.setState({
      id: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleChangingAuthedUser(this.state.id));
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
            onChange={this.handleChangeUser}
          >
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
