import React, { Component } from "react";

import Product from "./Product.jsx";
import { asyncFetch } from "../helpers/fetch";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    asyncFetch("http://localhost:3000/products")
      .then(data => {
        const products = data.map(item => {
          return {
            id: item._id,
            name: item.name,
            price: item.price
          };
        });
        this.setState({ products });
      });
  }

  render() {
    return (
      <div>
        <h3>Available Product</h3>
        {this.renderProductList()}
      </div>
    );
  }

  renderProductList = () => {
    const { products } = this.state;
    return (
      <ul style={{ paddingLeft: "0px" }}>
        {products.map(product => (
          <li key={product.id} style={{ listStyle: "none" }}>
            <Product info={product} />
          </li>
        ))}
      </ul>
    );
  };
}

export default ProductsList;
