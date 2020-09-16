import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_Data";

class Question extends Component {

  render() {
    const { question, authedUser, users, id } = this.props;
    const answerObject = users[authedUser].answers
    const answerChoice = answerObject[id]
    const answerText = question[answerChoice]

    return (
      <div className="question-container">
        <div className="user-header">
          <p>{question.author.name} asks: </p>
        </div>
        <div className="question-box">
          <div className="user-avatar">
            <img src={question.author.avatarURL} alt="None found"></img>
          </div>
          {this.props.answered ? (
            <div>
              <p>Would You Rather...</p>
              <div>{question.optionOne.text}</div>
              <div>{question.optionTwo.text}</div>
              <div>You said: {answerText.text}</div>
            </div>
          ) : (
            <div className="question-options">
              <form>
                <p>Would You Rather...</p>
                <input type="radio" id="optionOne" value="optionOne"></input>
                <label>{question.optionOne.text}</label>
                <br></br>
                <input type="radio" id="optionTwo" value="optionTwo"></input>
                <label>{question.optionTwo.text}</label>
              </form>
              <button className="submit">Submit</button>
            </div>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps)(Question);
