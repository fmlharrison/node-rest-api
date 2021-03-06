import React, { Component } from "react";

import Product from "./Product.jsx";
import ProductsButton from "./ProductsButton.jsx";
import asyncFetch from "../helpers/fetch";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    asyncFetch.fetchProducts().then(json => this.setState({ products: json }));
  }

  render() {
    return (
      <div>
        <h3>Available Product</h3>
        <div>
          <ProductsButton showProducts={this.fetchMoreProducts} />
        </div>
        {this.renderProductList()}
      </div>
    );
  }

  fetchMoreProducts = () => {
    asyncFetch.fetchProducts().then(json => this.setState({ products: json }));
  };

  renderProductList = () => {
    const { products } = this.state;
    return (
      <ul style={{ paddingLeft: "0px" }}>
        {products.map(product => (
          <li key={product._id} style={{ listStyle: "none" }}>
            <Product info={product} />
          </li>
        ))}
      </ul>
    );
  };
}

export default ProductsList;
