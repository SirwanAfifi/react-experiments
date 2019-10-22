class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <span>Value: {this.state.counter}</span>
        <div>
          <button
            onClick={_ => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            +
          </button>
          <button
            onClick={_ => {
              this.setState({ counter: this.state.counter - 1 });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
