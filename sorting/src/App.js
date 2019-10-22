import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "Sirwan Afifi", age: 30 },
        { name: "Hamed Ghaderi", age: 35 },
        { name: "Sattar Menbari", age: 35 },
        { name: "Fateh Ahmadpanah", age: 35 },
        { name: "Azad Janati", age: 39 },
        { name: "Shaho Toofani", age: 40 },
        { name: "Pooya Kolahghochi", age: 30 },
      ],
      sorted: [
        { name: "Sirwan Afifi", age: 30 },
        { name: "Hamed Ghaderi", age: 35 },
        { name: "Sattar Menbari", age: 35 },
        { name: "Fateh Ahmadpanah", age: 35 },
        { name: "Azad Janati", age: 39 },
        { name: "Shaho Toofani", age: 40 },
        { name: "Pooya Kolahghochi", age: 30 },
      ]
    };
  }

  onChange = (e) => {
    if (e.target.value === "age") {
      const sorted = [...this.state.list].sort((userA, userB) => {
        if (userB.age < userA.age) {
          return -1;
        }
        if (userB.age > userA.age) {
          return 1;
        }
        return 0;
      })
      this.setState({ list: this.state.list, sorted: sorted })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 bg-primary text-white p-2">
            <p className="bg-info p-2">Sort By: </p>
            <select onChange={this.onChange}>
              <option>Select an item</option>
              <option value="age">Age</option>
            </select>
          </div>
          <div className="col-8 bg-secondary text-white p-3">
            {this.state.sorted.map(item => <li key={item.name}>{item.name}</li>)}
          </div>
        </div>
        <div className="row">
          <div className="col-5 bg-info">
            <pre className="text-white">
              {JSON.stringify(this.state.list, null, 2)}
            </pre>
          </div>
          <div className="col-5 bg-info">
            <pre className="text-white">
              {JSON.stringify(this.state.sorted, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}