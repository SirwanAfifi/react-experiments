import React from 'react';
import './App.css';
import { List } from './List';

function App() {
  console.log("Render App Component");
  return (
    <div className="App">
      <h1>Reconciliation Process</h1>
      <List />
    </div>
  );
}

export default App;
