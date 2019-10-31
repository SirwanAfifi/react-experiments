import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UsersDropDowns } from './Users';
import { LoadWebstie } from "./LoadWebsite"
const EnhancedComponent = LoadWebstie(UsersDropDowns);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EnhancedComponent>
        </EnhancedComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
