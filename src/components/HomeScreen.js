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
  }
  render() {
    const { users, authedUser } = this.props;
    return (
      <div>
        <p>A</p>
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
  render() {
    const { users, authedUser } = this.props;
    return (
      <div>
        {/* <ul>
          {this.props.questionIDs.map((id) => (
            <Question key={id} id={id} />
          ))}
        </ul> */}
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
        <div className="unanswered" onClick={this.toggleUnanswered}>
          Unanswered Questions
        </div>
        <div className="answered" onClick={this.toggleAnswered}>
          Answered Questions
        </div>
        {this.state.showAnswered ? (
          <AnsweredQuestions users={this.props.users} authedUser={this.props.authedUser} />
        ) : (
          <UnansweredQuestions users={this.props.users} authedUser={this.props.authedUser} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
