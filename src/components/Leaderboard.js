import React, { Component } from "react";
import { connect } from "react-redux";

export class UserProfile extends Component {
  render() {
    const { user } = this.props;
    const answered = Object.keys(user.answers).length
    const created = user.questions.length
    const score = answered + created
    return (
      <div className="score-container">
        <div className="user-header">
          <p className="p-header">{user.name}</p>
        </div>
        <div className="stats-box">
          <div className="user-avatar">
            <img
              src={user.avatarURL}
              className="user-image"
              alt="None found"
            ></img>
          </div>
          <div className="score-options">
            <div className="stats-container"></div>
            <p> Answered Questions: {answered}</p>
            <p> Created Questions: {created}</p>
          </div>
          <div className="score-box">
            <p className="p-header">Score</p>
            <div>
              {score}
            </div>
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
        <div className="leader-list">
          <ul>
            {users &&
              users.map((user) => <UserProfile key={user.name} user={user} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userObject = Object.values(users);
  console.log(userObject)
  return {
    users: userObject,
  };
};

export default connect(mapStateToProps)(Leaderboard);
