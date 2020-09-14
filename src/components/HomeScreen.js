import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Login from './Login'
import { Leaderboard } from './Leaderboard'

function mapStateToProps({questions}) {
    return {
        questionIDs: Object.keys(questions)
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questionIDs.map((id) => 
                        <Question key={id} id={id} />
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeScreen)