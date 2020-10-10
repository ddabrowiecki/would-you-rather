import React, { Component } from "react";
import { connect } from "react-redux";

export class UserProfile extends Component {
  render() {
    const { user } = this.props;
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
            <p> Answered Questions: {user.answered}</p>
            <p> Created Questions: {user.created}</p>
          </div>
          <div className="score-box">
            <p className="p-header">Score</p>
            <div>
              {user.score}
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
    users.forEach(user => {
      user["answered"] = Object.keys(user.answers).length
      user["created"] = user.questions.length
      user["score"] = user.answered + user.created
    })
    const sortedUsers = users.sort((a,b)=> b.score - a.score)
    return (
      <div>
        <div className="leader-list">
          <ul>
            {sortedUsers &&
              sortedUsers.map((user) => <UserProfile key={user.name} user={user} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userObject = Object.values(users);
  return {
    users: userObject,
  };
};

export default connect(mapStateToProps)(Leaderboard);
