import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

export class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value
        this.setState(() => ({
            optionOne,
        }))
    }

    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true,
        }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state;
        if (toHome === true) {
            return <Redirect to='/' />
        }
        return(
            <div>
            <h3>Create a New Question</h3>
            <form className="new-question" onSubmit={this.handleSubmit}>
                <h3>Would you rather...</h3>
                <input
                placeholder='Option 1'
                value={ optionOne }
                onChange={this.handleChangeOptionOne}
                className="option-one"
                />
                <input
                placeholder='Option 2'
                value={ optionTwo }
                onChange={this.handleChangeOptionTwo}
                className="option-two"
                />
                <button
                type="submit"
                disabled={ optionOne === '' && optionTwo === ''}
                >Submit</button>
            </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)