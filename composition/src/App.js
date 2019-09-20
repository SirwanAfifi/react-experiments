import React, { Component } from 'react';
//import { Message } from "./Message";
//import { ActionButton } from './ActionButton';
//import { ThemeSelector } from './ThemeSelector';
import { GeneralList } from './GeneralList';
import { SortedList } from "./SortedList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"]
    };
  }

  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-6">
            <SortedList list={this.state.names} />
          </div>
        </div>
      </div>
    );
  }
}