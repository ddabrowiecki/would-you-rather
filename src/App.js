import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { handlePopulatingData } from "./actions/shared";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePopulatingData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        {!authedUser && <Login />}
        {authedUser && (
          <div className="App">
            <NavBar />
            <Route path="/" exact component={HomeScreen} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/login" exact component={Login} />
          </div>
        )}
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
