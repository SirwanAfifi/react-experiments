import React, { Component } from 'react';

export class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			flavor: "Vanilla",
			toppings: ["Strawberries"]
		};

		this.flavors = ["Chocolate", "Double Chocolate",
			"Triple Chocolate", "Vanilla"];
		this.toppings = ["Sprinkles", "Fudge Sauce",
			"Strawberries", "Maple Syrup"]
	}

	updateFormValue = (event) => {
		this.setState({ [event.target.name]: event.target.value }, () => this.props.submit(this.state))
	}

	updateFormValueCheck = (event) => {
		event.persist();
		this.setState(state => {
			if (event.target.checked) {
				state.toppings.push(event.target.name);
			} else {
				let index = state.toppings.indexOf(event.target.name);
				state.toppings.splice(index, 1);
			}
		}, () => this.props.submit(this.state));
	}


	render() {
		return (
			<div className="h5 bg-info text-white p-2">
				<div className="form-group">
					<label>Name</label>
					<input className="form-control"
						name="name"
						value={this.state.name}
						onChange={this.updateFormValue} />
				</div>

				<div className="form-group">
					<label>Ice Cream Toppings</label>
					{this.toppings.map(top =>
						<div className="form-check" key={top}>
							<input className="form-check-input"
								type="checkbox" name={top}
								value={this.state[top]}
								checked={this.state.toppings.indexOf(top) > -1}
								onChange={this.updateFormValueCheck} />
							<label className="form-check-label">{top}</label>
						</div>
					)} </div>
			</div>
		);
	}
}