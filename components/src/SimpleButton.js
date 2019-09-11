import React, { Component } from "react";

export class SimpleButton extends Component {
	render = () => {
		return (
			<button onClick={this.props.callback}
				className={this.props.className}>
				{this.props.text}
			</button>)
	}
}