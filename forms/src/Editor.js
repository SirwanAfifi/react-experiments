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
                    <select className="form-control"
                        name="flavor" value={this.state.flavor} onChange={this.updateFormValue}>
                        {this.flavors.map(flavor =>
                            <option value={flavor} key={flavor}>{flavor}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <label>Ice Cream Toppings</label>
                    <select name="toppings" className="form-control" multiple={true} value={this.state.toppings} onChange={this.updateFormValueOptions}
                    >
                        {this.toppings.map(top =>
                            <option key={top} value={top}>
                                {top}
                            </option>)}
                    </select>
                </div>
            </div>
        );
    }
}