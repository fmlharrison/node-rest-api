import React from "react";

import ProductsList from "../components/ProductsList.jsx";
import { product, apiProductResponse } from "../__mocks__/Product";
import fetchAPI from "../helpers/fetch"

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("Shallow render of ProductList compoent", () => {
  it("Renders and empty product list", () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Render product list component", () => {
  it("Renders and fetches products", () => {
    fetch.mockResponse(JSON.stringify(apiProductResponse), {status: 200});

    const wrapper = mount(<ProductsList />);
    expect(wrapper.state().products.length).toEqual(0);
    
    return flushPromises().then(() => {
      expect(wrapper.state().products.length).toEqual(1);
      expect(fetch.mock.calls).toHaveLength(1);
    })
  });
});
