import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ColorPicker from './ColorPicker/ColorPicker';
import ErrorBoundery from './ErrorBoundery/ErrorBoundery'

const App2 = (props) => {
  return (
    <div>
      {props}
    </div>
  )
}

class App extends Component {

  state = {
    showPersons: false,
    persons: [
      { id: 1, name: 'Sirwan', age: 29 },
      { id: 2, name: 'Sana', age: 13 },
      { id: 3, name: 'Saywan', age: 30 },
      { id: 4, name: 'Omid', age: 29 },
      { id: 5, name: 'Behzad', age: 29 },
    ],
    color: null
  };

  switchNameHandler = (e, name) => {
    console.log(e);
    alert(name);
  }

  togglePersons = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  changeColor = () => {
    const rndColorA = this.randomColor();
    const rndColorB = this.randomColor();
    document.body.style.backgroundImage = `linear-gradient(${rndColorA}, ${rndColorB})`;
  }

  randomColor = () => {
    return '#' +
      Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');
  }

  render() {
    const style = {
      backgroundColorL: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <p>
          <button style={style}
            onClick={this.togglePersons}>
            Toggle Person
          </button>
        </p>
        <ColorPicker click={this.changeColor} />
        {this.state.showPersons ?
          <div>
            {this.state.persons.map((person, index) => {
              const hexColor = this.randomColor();
              return <ErrorBoundery><Person
                color={hexColor}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age} />
              </ErrorBoundery>
            })}
          </div> : null
        }
      </div>
    );
  }
}

export default App;
