import React from "react";
import PropTypes from "prop-types";

const Product = ({ info }) => {
  return (
    <div data-product-id={info._id}>
      <h4>{info.name}</h4>
      <p>{info.price}</p>
    </div>
  );
};

export default Product;

Product.propTypes = {
  info: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};
