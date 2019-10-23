import React, { Component } from 'react';
import { AddColorForm } from './AddColorForm';

export default class App extends Component {

  logColor = (title, color) =>
    console.log(`New color: ${title} | ${color}`)

  render() {
    return (
      <AddColorForm onNewColor={this.logColor} />
    );
  }
}