import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser,
    users,
    questions,
  };
}

class AnsweredQuestions extends Component {
  state = {
    answered: true,
  };
  render() {
    const { users, authedUser, questions } = this.props;
    const answers = users[authedUser].answers;
    const answered = questions.filter((question) =>
      Object.keys(answers).includes(question)
    );
    const sortedAnswers = [];
    answered.forEach((id) => sortedAnswers.push({ [id]: answers[id] }));
    return (
      <div>
        <ul>
          {sortedAnswers.map((entry) => (
            <Question
              key={Object.keys(entry)}
              id={Object.keys(entry)}
              answered={this.state.answered}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class UnansweredQuestions extends Component {
  render() {
    const { users, authedUser, questions } = this.props;
    const unanswered = questions.filter(
      (question) => !Object.keys(users[authedUser].answers).includes(question)
    );
    return (
      <div>
        <ul>
            {unanswered.map((id) => <Question key={id} id={id} />)}
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

  sortQuestions = () => {
    const { questions } = this.props;
    const questionsArray = [];
    Object.values(questions).forEach((question) =>
      questionsArray.push(question)
    );
    const sortedQuestions = questionsArray.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedIds = [];
    sortedQuestions.forEach((question) => sortedIds.push(question.id));
    return sortedIds;
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
              questions={this.sortQuestions()}
            />
          ) : (
            <UnansweredQuestions
              users={this.props.users}
              authedUser={this.props.authedUser}
              questions={this.sortQuestions()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
