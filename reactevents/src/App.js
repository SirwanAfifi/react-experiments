import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Ready"
		};
	}

	handleEvent = () => {
		this.setState({ message: "Clicked!" });
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