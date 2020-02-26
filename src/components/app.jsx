import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from './Films'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link>Go Home</Link>
          <Link to = '/films'>View Films</Link>
          <Link>View People</Link>
          <Switch>
            <Route exact path = '/films' component = {Films}/>
            <Route />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
