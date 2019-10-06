import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export default class App extends Component {
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
                            <Route path="/products" render={() => {
                                return <h1>Products</h1>
                            }} />
                            <Route path="/suppliers" render={() => {
                                return <h1>Suppliers</h1>
                            }} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}