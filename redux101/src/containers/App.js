import React, { useState, useEffect } from "react";
import data from "../data.json";
import Search from "../components/Search";
import CardList from "../components/CardList.js";
import { connect } from "react-redux";
import { setSearchField } from "../store/actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

const App = props => {
  const [characters, setCharacters] = useState([]);
  const { searchField, onSearchChange } = props;
  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    setCharacters(data.results);
  }, []);

  return (
    <div className="container mx-auto">
      <Search searchChange={onSearchChange} />
      <CardList characters={filteredCharacters} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
