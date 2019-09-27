import React, { Component } from 'react';
import { Editor } from "./Editor";
import { ProductTable } from "./ProductTable";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  addProduct = (product) => {
    if (this.state.products.indexOf(product.name) === -1) {
      this.setState({ products: [...this.state.products, product] });
    }
  }

  render() {
    return (
      <div>
        <Editor callback={this.addProduct} />
        <h6 className="bg-secondary text-white m-2 p-2">Products</h6>
        <div className="m-2">
          {
            this.state.products.length === 0
              ? <div className="text-center">No Products</div>
              : <ProductTable products={this.state.products} />
          }
        </div>
      </div>
    );
  }
}