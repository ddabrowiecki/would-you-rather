import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import NewQuestion from './NewQuestion'
import NavBar from './NavBar'

function mapStateToProps({questions}) {
    return {
        questionIDs: Object.keys(questions)
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ul>
                    {this.props.questionIDs.map((id) => 
                        <Question key={id} id={id} />
                    )}
                </ul>
                <NewQuestion />
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeScreen)