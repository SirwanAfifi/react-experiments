import React, { Component } from "react";

export class SimpleButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			hasButtonBeenClicked: false
		};
	}

	render = () => {
		return (
			<button onClick={this.handleClick}
				className={this.props.className}>
				{this.props.text} {this.state.counter}
				{this.state.hasButtonBeenClicked &&
					<div>Button Clicked!</div>}
			</button>)
	}

	handleClick = () => {
		for (let i = 0; i < 5; i++) {
			this.setState((state, props) => {
				return { counter: state.counter + 1 }
			});
		}
		this.setState({
			hasButtonBeenClicked: true
		});
		this.props.callback();
	}
}