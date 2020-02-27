import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from "./Films";
import Homepage from "./homepage";
import People from "./people";
import SpecificFilm from "./specificfilm";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link className ='btn text-light mt-2' to="/">Go Home</Link>
          <Link className ='btn text-light mt-2' to="/films">View Films</Link>
          <Link className ='btn text-light mt-2' to="/people">View People</Link>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/films/:id" component={SpecificFilm} />
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
