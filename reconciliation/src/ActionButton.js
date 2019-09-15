import React, { Component } from 'react';
export class ActionButton extends Component {
    render() {
        console.log("Render ActionButton Component");
        return (
            <button onClick={this.props.callback}>Click me</button>
        );
    }
}