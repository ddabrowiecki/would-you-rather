import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { handlePopulatingData } from './actions/shared'
import HomeScreen from './components/HomeScreen'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePopulatingData())
  }
  render() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  )};
}

export default connect()(App);
