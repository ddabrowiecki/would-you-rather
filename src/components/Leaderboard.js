import React, { Component } from "react";
import { connect } from "react-redux";

export class UserProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="score-container">
        <div className="user-header">
          <p>{user.name}</p>
        </div>
        <div className="score-box">
          <div className="user-avatar">
            <img src={user.avatarURL}></img>
          </div>
          <div className="score-options">
            <p> Answered Questions: {user.answers.length}</p>
            <p> Created Questions: {user.questions.length}</p>
            <p>Score</p>
            <div>{user.answers.length + user.questions.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <p>Leaderboard</p>
        <ul>
          {users && users.map((user) => (
            <UserProfile key={user.name} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
  const userObject = Object.values(users);
  return {
    users: userObject,
  };
}

export default connect(mapStateToProps)(Leaderboard);
