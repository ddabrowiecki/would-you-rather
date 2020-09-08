import React, { Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { handlePopulatingData } from "./actions/shared";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NewQuestion } from './components/NewQuestion'
import { Leaderboard } from './components/Leaderboard'
import { Login } from './components/Login'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePopulatingData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/new" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
