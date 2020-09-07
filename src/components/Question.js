import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../_Data.js'

class Question extends React.Component {
    render() {
        const { question } = this.props;
        console.log(question.author.avatarURL)
        return(
            <div>
                <div className="user-header">
                    <p>{question.author.name} asks: </p>
                </div>
                <div className="user-avatar">
                    <img src={question.author.avatarURL}></img>
                </div>
                <div className="question-options">
                    <p>Would You Rather...</p>
                    <button className="submit">Submit</button>
                </div>
                {this.props.id}
            </div>
        )
    }
}

function mapStateToProps({authUser, users, questions}, {id}) {
    const question = questions[id]
    return {
        authUser,
        question: formatQuestion({optionOneText: question.optionOne.text, optionTwoText: question.optionTwo.text, author: users[question.author]})
    }
}

export default connect(mapStateToProps)(Question)