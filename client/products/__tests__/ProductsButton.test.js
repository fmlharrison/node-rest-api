import React from "react";
import ProductsButton from "../components/ProductsButton.jsx";

test("Renders button", () => {
  const component = shallow(<ProductsButton showProducts={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
