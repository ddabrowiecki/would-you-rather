import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

export class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChangeOption = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3 className="create">Create a New Question</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <h3 className="would">Would you rather...</h3>
          <input
            placeholder="Option 1"
            value={optionOne}
            name="optionOne"
            onChange={this.handleChangeOption}
            className="option-one"
          />
          <input
            placeholder="Option 2"
            value={optionTwo}
            name="optionTwo"
            onChange={this.handleChangeOption}
            className="option-two"
          />
          <button
            type="submit"
            className="create-submit"
            disabled={optionOne === "" && optionTwo === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
