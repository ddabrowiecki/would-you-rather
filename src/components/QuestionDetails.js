import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  getPercentage = (answerArray) => {
    const { question, questions } = this.props;
    const individualQuestion = questions[question.id]
    const sumOfVoteLengths = individualQuestion.optionOne.votes.length + individualQuestion.optionTwo.votes.length
    const percentage = (answerArray.length) / (sumOfVoteLengths) * 100;
    return `${Math.round(percentage)}%`;
  };

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
                <div className="options">
                  {question.optionOne.text}
                  <div className="number-votes">
                    Number of Votes: {question.optionOne.votes.length}
                  </div>
                  <div className="percentage-votes">
                    Percentage of Votes:{" "}
                    {this.getPercentage(question.optionOne.votes)}
                  </div>
                </div>
                <div className="options">
                  {question.optionTwo.text}
                  <div className="number-votes">
                    Number of Votes: {question.optionTwo.votes.length}
                  </div>
                  <div className="percentage-votes">
                    Percentage of Votes:{" "}
                    {this.getPercentage(question.optionTwo.votes)}
                  </div>
                </div>
                <div className="p-header options-answer">
                  You said: {answerText.text}
                </div>
              </div>
            ) : (
              <div className="question-options">
                <p className="p-header">Would You Rather...</p>
                <div className="options">
                  {question.optionOne.text}
                  <div className="number-votes">
                    Number of Votes: {question.optionOne.votes.length}
                  </div>
                  <div className="percentage-votes">
                    Percentage of Votes:{" "}
                    {this.getPercentage(question.optionOne.votes)}
                  </div>
                </div>
                <div className="options">
                  {question.optionTwo.text}
                  <div className="number-votes">
                    Number of Votes: {question.optionTwo.votes.length}
                  </div>
                  <div className="percentage-votes">
                    Percentage of Votes:{" "}
                    {this.getPercentage(question.optionTwo.votes)}
                  </div>
                </div>
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

class ErrorPage extends Component {
  render() {
    return <div className="error-page">Oops, that poll does not exist!</div>;
  }
}

class QuestionDetails extends Component {
  render() {
    const { question, authedUser, questions, users } = this.props;
    return (
      <div>
        {question && (
          <Details question={question} authedUser={authedUser} users={users} questions={questions} />
        )}
        {!question && <ErrorPage />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  return {
    question,
    questions,
    id,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
