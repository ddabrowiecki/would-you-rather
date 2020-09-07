import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_Data.js";

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question-container">
        <div className="user-header">
          <p>{question.author.name} asks: </p>
        </div>
        <div className="question-box">
          <div className="user-avatar">
            <img src={question.author.avatarURL}></img>
          </div>
          <div className="question-options">
            <form>
              <p>Would You Rather...</p>
              <input type="radio" id="optionOne" value="optionOne"></input>
              <label for="optionOne">{question.optionOne.text}</label>
              <br></br>
              <input type="radio" id="optionTwo" value="optionTwo"></input>
              <label for="optionTwo">{question.optionTwo.text}</label>
            </form>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authUser,
    question: formatQuestion({
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      author: users[question.author],
    }),
  };
}

export default connect(mapStateToProps)(Question);
