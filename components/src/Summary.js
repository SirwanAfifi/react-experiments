import React, { Component } from 'react';
import { SimpleButton } from './SimpleButton';

export class Summary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}
	incrementCounter = (increment) => {
		this.setState((state) => {
			return { counter: this.state.counter + 1 }
		});
	}

	render = () => {
		if (this.props.name.length > 4) {
			return <>
				<td>{this.props.index + 1} </td>
				<td>{this.props.name} </td>
				<td>{this.props.name.length} </td>
				<td>
					<SimpleButton
						className="btn btn-warning btn-sm m-1"
						callback={this.props.reverseCallback}
						text={`Reverse (${this.props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter}
					/>
					<SimpleButton
						className="btn btn-info btn-sm m-1"
						callback={() => this.props.promoteCallback(this.props.name)}
						text={`Promote (${this.props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter} />
				</td>
			</>
		}
		return null;
	}
}