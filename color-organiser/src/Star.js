import React, { Component } from 'react';
import "./Star.scss"

export class Star extends Component {

	render() {
		return (
			<>
				<i className={(this.props.selected) ? "star selected" : "star"} onClick={this.props.onClick}></i>
			</>
		);
	}
}