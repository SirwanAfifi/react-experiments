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
		this.setState({
			counter: this.state.counter + 1
		}, () => this.setState({
			hasButtonBeenClicked: this.state.counter > 0
		}));
		this.props.callback();
	}
}