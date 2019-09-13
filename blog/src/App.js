import React, { Component } from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { AuthorList } from './components/AuthorList';

export default class App extends Component {
  render() {
    console.log("Render App Component");
    return (
      <>
        <div className="columns">
          <div className="column">
            <Header />
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <List />
            </div>
            <div className="column is-4">
              <AuthorList />
            </div>
          </div>
        </div>
      </>
    );
  }
}
