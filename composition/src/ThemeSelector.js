import React, { Component } from 'react';
export class ThemeSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: "primary"
		}
		this.themes = ["primary", "secondary", "success", "warning", "dark"];
	}

	setTheme = (event) => {
		this.setState({ theme: event.target.value });
	}

	render() {
		let modChildren = React.Children.map(this.props.children,
			(c => React.cloneElement(c, { theme: this.state.theme })));

		return (
			<div className="bg-dark p-2">
				<div className="form-group text-left">
					<label className="text-white">Theme: </label>
					<select className="form-control" value={this.state.theme}
						onChange={this.setTheme}>
						{this.themes.map(theme =>
							<option key={theme} value={theme}>{theme}</option>)}
					</select>
				</div>

				<div className="bg-info p-2">
					{modChildren}
				</div>
			</div>
		);
	}
}