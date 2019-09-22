import React, { Component } from 'react';
//import { Message } from "./Message";
//import { ActionButton } from './ActionButton';
//import { ThemeSelector } from './ThemeSelector';
import { GeneralList } from './GeneralList';
import { SortedList } from "./SortedList";
import { ProController } from "./ProController";
const ProList = ProController(SortedList);
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// counter: 0
			names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
			cities: ["London", "New York", "Paris", "Milan", "Boston"]
		};
	}

	// toggleProMode = () => {
	//   this.setState({ proMode: !this.state.proMode });
	// }
	// incrementCounter = () => {
	//   this.setState({ counter: this.state.counter + 1 });
	// }

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-3">
						<GeneralList list={this.state.names} theme="primary" />
					</div>
					<div className="col-3">
						<ProList list={this.state.names} />
					</div>
					<div className="col-3">
						<GeneralList list={this.state.cities} theme="secondary" />
					</div>
					<div className="col-3">
						<ProList list={this.state.names} />
					</div>
				</div>
			</div>
		);
	}
}