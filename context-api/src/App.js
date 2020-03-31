import React from "react";
import "./App.css";
import { LanguageStore } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageStore>
      <h>Hello</h>
    </LanguageStore>
  );
}

export default App;
