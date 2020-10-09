import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionDetails extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="question-details">
        <p>Question Details</p>
        <p>Option: {id}</p>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  return {
    question,
    id,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
