import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export default class App extends Component {
    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div><Link to="/products">Products</Link></div>
                            <div><Link to="/suppliers">Suppliers</Link></div>
                        </div>
                        <div className="col">
                            <Route path={["/data/one", "/people/bob"]} exact={true}
                                render={() => this.renderMessage("Route #1")} />
                            <Route path={["/data", "/people"]}
                                render={() => this.renderMessage("Route #2")} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}