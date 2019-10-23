import React, { Component } from 'react';
import { AddColorForm } from './AddColorForm';

export default class App extends Component {

  logColor = (title, color, starRating) =>
    console.log(`New color: ${title} | ${color} | Rating: ${starRating}`)

  render() {
    return (
      <AddColorForm onNewColor={this.logColor} />
    );
  }
}