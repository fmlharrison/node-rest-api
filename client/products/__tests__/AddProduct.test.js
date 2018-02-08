import React from "react";

import AddProduct from "../components/AddProduct";

test("renders a form to add a new product", () => {
  const component = shallow(<AddProduct />);
  expect(component.state().name).toBe("");
  expect(component.state().price).toBe("");
  expect(component).toMatchSnapshot();
});

test("Changes the state of the component when user inputs text in form", () => {
  const component = shallow(<AddProduct />);

  component
    .find("#product-name")
    .simulate("change", { target: { value: "Playstation" } });

  component
    .find("#product-price")
    .simulate("change", { target: { value: "550" } });

  expect(component.state().name).toBe("Playstation");
  expect(component.state().price).toBe("550");
});
