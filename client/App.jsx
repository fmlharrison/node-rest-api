import React, { Component } from "react";
import ProductsList from "./products/components/ProductsList.jsx";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>List Products</h1>
        <div><ProductsList /></div>
      </div>
    );
  }
}

export default App;
