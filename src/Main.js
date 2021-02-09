import React, { Component } from "react";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePageHook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    // TODO: Add Router
    // return <AuthPage />;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>

          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
