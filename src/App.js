import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux'
import { handlePopulatingData } from './actions/shared'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePopulatingData())
  }
  render() {
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  )};
}

export default connect()(App);
