import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }

  updateName = (e) => {
    const name = e.target.value;
    this.setState({ name })
  }

  updatePrice = (e) => {
    const price = e.target.value;
    this.setState({ price })
  }

  render() {
    return (
      <div>
        <form>
          <label for="product-name">Product Name</label>
          <br />
          <input type="text" id="product-name" name="name" value={this.state.name} onChange={this.updateName}/>
          <label for="product-price">Price</label>
          <br />
          <input type="text" id="product-price" name="price" value={this.state.price} onChange={this.updatePrice}/>
          <br />
          <input type="submit" value="Add Product"/>
        </form>
      </div>
    );
  }
}

export default AddProduct;
