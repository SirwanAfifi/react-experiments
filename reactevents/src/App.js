import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Ready",
			counter: 0
		};
	}

	handleEvent = (event) => {
		event.persist();
		this.setState({ counter: this.state.counter + 1 },
			() => this.setState({ message: `${event.type}: ${this.state.counter}` }));
	}

	render = () => {
		return <div className="m-2">
			<div className="h4 bg-primary text-white text-center p-2">
				{this.state.message}
			</div>
			<div className="text-center">
				<button className="btn btn-primary"
					onClick={this.handleEvent}>Click</button>
			</div>
		</div>
	}
}