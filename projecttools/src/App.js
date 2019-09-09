import React, { Component } from 'react';
import "./App.css"
import reactLogo from "./logo.svg";

let name = "Sirwan";
const city = "Sanandaj";

export default class App extends Component {

	message = () => `Hello ${name} from ${city}`;

	render = () =>
		<div className="text-center">
			<h4 className="bg-primary text-white text-center p-3">
				{this.message()}
			</h4>
			<img src={reactLogo} alt="reactLogo" />
		</div>
}