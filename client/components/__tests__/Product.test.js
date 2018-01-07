import React from "react";
import Product from "../Product.jsx";
import { product } from "../__mocks__/Product";

test("render the products list", () => {
  const wrapper = shallow(<Product info={product} />);
  expect(wrapper).toMatchSnapshot();
});

test("renders with the correct props", () => {
  const wrapper = mount(<Product info={product} />);
  expect(wrapper.props().info.id).toEqual("12345");
  expect(wrapper.props().info.name).toEqual("Happy Meal");
  expect(wrapper.props().info.price).toEqual(5.99);
});
