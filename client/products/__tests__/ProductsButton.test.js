import React from "react";
import ProductsButton from "../components/ProductsButton.jsx";

test("Renders button component", () => {
  const component = shallow(<ProductsButton showProducts={jest.fn()} />);
  expect(component).toMatchSnapshot();
});

test("Clicking button fires props callback", () => {
  const mockPropFunc = jest.fn();
  const component = shallow(<ProductsButton showProducts={mockPropFunc} />);
  component.find("#show-products").simulate("click", { preventDefault() {} });
  expect(mockPropFunc.mock.calls.length).toBe(1)
});
