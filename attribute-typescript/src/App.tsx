import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SampleComponent } from "./components/SampleComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SampleComponent />
      </header>
    </div>
  );
};

export default App;
