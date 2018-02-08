import React from "react";
import sinon from "sinon";

import ProductsList from "../components/ProductsList.jsx";
import { product, apiProductResponse } from "../__mocks__/Product";
import fetchAPI from "../helpers/fetch";

describe("Shallow render of ProductList compoent", () => {
  it("Renders and empty product list", () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Render product list component", () => {
  it("Renders and fetches products", () => {
    const promise = Promise.resolve(apiProductResponse);
    sinon.stub(fetchAPI, "fetchProducts").returns(promise);

    const wrapper = mount(<ProductsList />);

    return promise
      .then(() => {
        expect(wrapper.state().products).toHaveLength(1);

        wrapper.update();
      })
      .then(() => {
        expect(wrapper).toMatchSnapshot();
      });
  });
});
