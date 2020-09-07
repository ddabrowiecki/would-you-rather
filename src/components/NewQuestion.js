import React, { Component } from "react";
import { connect } from "react-redux";

export default class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
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
        console.log(optionOne, optionTwo);
        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state;
        return(
            <div>
            <h3>Create a New Question</h3>
            <form className="new-question" onSubmit={this.handleSubmit}>
                <h3>Would you rather...</h3>
                <textarea
                placeholder='Option 1'
                value={ optionOne }
                onChange={this.handleChangeOptionOne}
                className="option-one"
                ></textarea>
                <textarea
                placeholder='Option 2'
                value={ optionTwo }
                onChange={this.handleChangeOptionTwo}
                className="option-two"
                ></textarea>
                <button
                type="submit"
                disabled={ optionOne === '' && optionTwo === ''}
                >Submit</button>
            </form>
            </div>
        )
    }
}