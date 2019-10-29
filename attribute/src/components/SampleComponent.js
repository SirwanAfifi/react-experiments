import React, { Component } from 'react';
export class SampleComponent extends Component {

	state = {
		items: [
			{ id: this.getRandomInt(5), name: "Item 1" },
			{ id: this.getRandomInt(5), name: "Item 2" }
		]
	}
	getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	}
	render() {
		return (
			<ul>
				{this.state.items.map(item => <li key={item.id}>{item.name} - {item.id}</li>)}
			</ul>
		);
	}
}
