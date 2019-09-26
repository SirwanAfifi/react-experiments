import React, { Component } from 'react';

export class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			flavor: "Vanilla",
			twoScoops: false
		};
	}

	updateFormValue = (event) => {
		this.setState({ [event.target.name]: event.target.value }, () => this.props.submit(this.state))
	}

	updateFormValueCheck = (event) => {
		this.setState({ [event.target.name]: event.target.checked },
			() => this.props.submit(this.state));
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
					<div className="form-check">
						<input className="form-check-input"
							type="checkbox" name="twoScoops"
							checked={this.state.twoScoops}
							onChange={this.updateFormValueCheck} />
						<label className="form-check-label">Two Scoops</label>
					</div>
				</div>
			</div>
		);
	}
}