import React from "react";
import { unmountComponentAtNode } from "react-dom";
import NotFoundPage from "../../../pages/NotFound/index.js";
import NotFound from "../../../components/NotFound/index.js";
import setUpTest from "../../setUpTest.js";
import { shallow } from "enzyme";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("the Not Found Page", () => {

  it("renders without crashing", () => {
    shallow(<NotFoundPage />);
  });

  it("renders a NotFound component", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

});
