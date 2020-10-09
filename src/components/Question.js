import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_Data";
import { handleAddVote } from "../actions/questions";
import { addAnswerToUser } from "../actions/users";
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  state = {
    qid: null,
    vote: null,
  };

  handleSubmitQuestion = () => {
    const { qid, vote } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(handleAddVote(qid, vote));
    dispatch(addAnswerToUser(authedUser, qid, vote));
  };

  selectOption = (e) => {
    const { id } = this.props;
    this.setState({
      qid: id,
      vote: e.target.value,
    });
  };

  render() {
    const { question, authedUser, users, id } = this.props;
    const answerObject = users[authedUser].answers;
    const answerChoice = answerObject[id];
    const answerText = question[answerChoice];

    return (
      <Link to={`/questions/${id}`} className="question-container" >
        <div className="user-header">
          <p>{question.author.name} asks: </p>
        </div>
        <div className="question-box">
          <div className="user-avatar">
            <img
              src={question.author.avatarURL}
              className="user-image"
              alt="None found"
            ></img>
          </div>
          {this.props.answered ? (
            <div className="question-options">
              <p className="p-header">Would You Rather...</p>
              <div className="options">- {question.optionOne.text}</div>
              <div className="options">- {question.optionTwo.text}</div>
              <div className= "p-header options">You said: {answerText.text}</div>
            </div>
          ) : (
            <div className="options-container">
              <div className="question-options">
                <form>
                  <p className="p-header">Would You Rather...</p>
                  <input
                    type="radio"
                    id="optionOne"
                    value="optionOne"
                    onClick={this.selectOption}
                  ></input>
                  <label>{question.optionOne.text}</label>
                  <br></br>
                  <input
                    type="radio"
                    id="optionTwo"
                    value="optionTwo"
                    onClick={this.selectOption}
                  ></input>
                  <label>{question.optionTwo.text}</label>
                </form>
                <div className="submit-container">
                  <button
                    className="submit"
                    onClick={this.handleSubmitQuestion}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ Link>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    users,
    question: formatQuestion({
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      author: users[question.author],
    }),
  };
}

export default withRouter(connect(mapStateToProps)(Question));
