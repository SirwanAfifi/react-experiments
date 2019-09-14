import React from 'react';
import { SecretComponent } from "./Secret";
import { PrivateRoute } from "./PrivateRoute";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(props) => {
          return <h1>Hello</h1>
        }} />
        <Route exact path="/test" render={(props) => {
          console.log(props)
          return <h1>Test</h1>
        }} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/secret" component={SecretComponent} />
      </Router>
    </div>
  );
}

export default App;
