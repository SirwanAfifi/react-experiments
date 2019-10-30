import React, { Component } from 'react';

export class Content extends Component {
    render() {
        React.Children.map(child => {
            console.log(child)
        })

        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}