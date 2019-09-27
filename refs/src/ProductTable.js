import React, { Component } from 'react';
export class ProductTable extends Component {
    render() {
        return (
            <table className="table table-sm table-striped">
                <thead><tr><td>Name</td><td>Category</td><td>Price</td></tr></thead>
                <tbody>
                    {this.props.products.map(p =>
                        <tr key={p.name}>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                        </tr>)}
                </tbody>
            </table>
        );
    }
}