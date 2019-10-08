import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }
  from "react-router-dom";
import { RouteInfo } from "./RouteInfo";
import { ToggleLink } from "./ToggleLink";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <ToggleLink to="/products">Products</ToggleLink>
              <ToggleLink to="/suppliers">Suppliers</ToggleLink>
              <ToggleLink to="/info/match">Match</ToggleLink>
              <ToggleLink to="/info/location">Location</ToggleLink>
              <ToggleLink to="/info" exact={true}>All Info</ToggleLink>
            </div>
            <div className="col">
              <Switch>
                <Route path="/info/:datatype?" component={RouteInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}