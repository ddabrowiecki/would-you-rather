import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser,
    users,
    questionIDs: Object.keys(questions),
  };
}

class AnsweredQuestions extends Component {
  state = {
    answered: true,
  };
  render() {
    const { users, authedUser } = this.props;
    return (
      <div>
        <ul>
          {Object.keys(users[authedUser].answers).map((id) => (
            <Question key={id} id={id} answered={this.state.answered} />
          ))}
        </ul>
      </div>
    );
  }
}

class UnansweredQuestions extends Component {
  state = {
    noQuestions: false,
  };
  render() {
    const { users, authedUser, questions } = this.props;
    const { noQuestions } = this.state;
    const unanswered = questions.filter(
      (question) => !Object.keys(users[authedUser].answers).includes(question)
    );
    return (
      <div>
        <ul>
          {noQuestions === true && (
            <div className="out-of-questions">
              No more questions. Write some more!
            </div>
          )}
          {noQuestions === false &&
            unanswered.map((id) => <Question key={id} id={id} />)}
        </ul>
      </div>
    );
  }
}

class HomeScreen extends Component {
  state = {
    showAnswered: false,
  };

  toggleUnanswered = () => {
    this.setState({ showAnswered: false });
  };

  toggleAnswered = () => {
    this.setState({ showAnswered: true });
  };

  render() {
    return (
      <div>
        <div className="questions-tab">
          <div className="unanswered" onClick={this.toggleUnanswered}>
            Unanswered Questions
          </div>
          <div className="answered" onClick={this.toggleAnswered}>
            Answered Questions
          </div>
        </div>
        <div className="question-list">
          {this.state.showAnswered ? (
            <AnsweredQuestions
              users={this.props.users}
              authedUser={this.props.authedUser}
            />
          ) : (
            <UnansweredQuestions
              users={this.props.users}
              authedUser={this.props.authedUser}
              questions={this.props.questionIDs}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
