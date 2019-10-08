import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch }
  from "react-router-dom";
import { RouteInfo } from "./RouteInfo";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <NavLink className="m-2 btn btn-block btn-primary"
                activeClassName="active" to="/info">Route Info</NavLink>
            </div>
            <div className="col">
              <Switch>
                <Route path="/info" component={RouteInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}