import React, { Component } from 'react';
import { ProModeContext } from "./ProModeContext";
export class ActionButton extends Component {
	render() {
		return (
			<ProModeContext>
				{contextData =>
					<button className={this.getClasses(contextData.proMode)}
						disabled={!contextData.propMode}
						onClick={this.props.callback}>
						{this.props.text}
					</button>}
			</ProModeContext>
		);
	}

	getClasses(proMode) {
		let col = proMode ? this.props.theme : "danger";
		return `btn btn-${col} m-2`;
	}
}