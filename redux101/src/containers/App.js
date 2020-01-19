import React, { useState, useEffect } from "react";
import data from "../data.json";
import Search from "../components/Search";
import CardList from "../components/CardList.js";
export default () => {
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    setCharacter(data.results);
  }, []);

  return (
    <div className="container mx-auto">
      <Search />
      <CardList characters={characters} />
    </div>
  );
};
