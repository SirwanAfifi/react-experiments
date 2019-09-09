import React, { Component } from 'react';

export default class App extends Component {
	render = () => React.createElement("h4",
		{ className: "bg-primary text-white text-center p-3" },
		React.createElement("span", {
			className: "text-white"
		}, "Hello")
	)
}