import React, { Component } from 'react';
import { ActionButton } from './ActionButton';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, title: "Item 1" },
                { id: 2, title: "Item 2" },
                { id: 3, title: "Item 3" },
                { id: 4, title: "Item 4" },
                { id: 5, title: "Item 5" },
            ]
        };
    }

    reverse = () => {
        this.setState({ items: this.state.items.reverse() });
    }

    render() {
        console.log("Render List Component");
        return (
            <div>
                <ActionButton callback={this.reverse} />
                <ul id="list">
                    {this.state.items.map(item => {
                        return <li key={item.id}>
                            {item.title}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}