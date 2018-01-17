import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductsButton extends Component {
  handleClick = event => {
    event.preventDefault();
    return this.props.showProducts();
  };

  render() {
    return <button onClick={this.handleClick}>Show Products</button>;
  }
}

ProductsButton.propTypes = {
  showProducts: PropTypes.func.isRequired
};

export default ProductsButton;
