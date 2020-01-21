import React, { useState, useEffect } from "react";
import data from "../data.json";
import Search from "../components/Search";
import CardList from "../components/CardList.js";
import { connect } from "react-redux";
import { setSearchField, requestCharacters } from "../store/actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchCharacter.searchField,
    characters: state.requestCharacter.characters,
    isPending: state.requestCharacter.isPending,
    error: state.requestCharacter.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: () => dispatch(requestCharacters())
  };
};

const App = props => {
  const { searchField, onSearchChange, characters } = props;
  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    props.onRequestCharacters();
  }, []);

  return (
    <div className="container mx-auto">
      <Search searchChange={onSearchChange} />
      <CardList characters={filteredCharacters} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
