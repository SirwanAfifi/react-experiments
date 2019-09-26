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

	updateFormValueOptions = (event) => {
		let options = [...event.target.options]
			.filter(o => o.selected).map(o => o.value);
		this.setState({ [event.target.name]: options }, () =>
			this.props.submit(this.state));

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
					<label>Ice Cream Flavors</label>
					{this.flavors.map(flavor =>
						<div className="form-check" key={flavor}>
							<input className="form-check-input"
								type="radio" name="flavor"
								value={flavor}
								checked={this.state.flavor === flavor}
								onChange={this.updateFormValue} />
							<label className="form-check-label">
								{flavor}
							</label>
						</div>
					)}
				</div>
			</div>
		);
	}
}