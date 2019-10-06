import React, { Component } from 'react';
import { Users } from "./Users";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return <div className="container text-center">
      <div className="row p-2">
        <div className="form-check">
          <input type="checkbox" className="form-check-input"
            checked={this.state.toggle}
            onChange={this.handleChange} />
          <label className="form-check-label">Toggle</label>
        </div>
        <div className="row p-2">
          {this.state.toggle && <Users />}
        </div>
      </div>
    </div>
  }
}