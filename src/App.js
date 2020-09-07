import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { handlePopulatingData } from './actions/shared'
import HomeScreen from './components/HomeScreen'
import NewQuestion from './components/NewQuestion'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePopulatingData())
  }
  render() {
  return (
    <div className="App">
      <HomeScreen />
      <NewQuestion />
    </div>
  )};
}

export default connect()(App);
