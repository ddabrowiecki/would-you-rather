import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionDetails extends Component {
  render() {
    const { question, authedUser, users } = this.props;
    const id = question.id;
    const answers = users[authedUser].answers;
    const answerChoice = answers[id];
    const answerText = question[answerChoice];
    return (
      <div className="question-list">
        <div className="question-container">
          <div className="user-header">
            <p>{users[question.author].name} asks: </p>
          </div>
          <div className="question-box">
            <div className="user-avatar">
              <img
                src={users[question.author].avatarURL}
                className="user-image"
                alt="None found"
              ></img>
            </div>
            {answerChoice ? (
              <div className="question-options">
                <p className="p-header">Would You Rather...</p>
                <div className="options">{question.optionOne.text}</div>
                <div className="options">{question.optionTwo.text}</div>
                <div className="p-header options-answer">
                  You said: {answerText.text}
                </div>
              </div>
            ) : (
              <div className="question-options">
                <p className="p-header">Would You Rather...</p>
                <div className="options">{question.optionOne.text}</div>
                <div className="options">{question.optionTwo.text}</div>
                <div className="p-header options-answer">
                  You haven't answered this question yet!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  return {
    question,
    id,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
