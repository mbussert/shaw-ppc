import React from "react";
import { unmountComponentAtNode } from "react-dom";
import HomePage from "../../../pages/Home/Home.js";
import Navbar from "../../../components/navbar/index.js";
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

describe("the Home Page", () => {

  it("renders without crashing", () => {
    shallow(<HomePage />);
  });

  it("renders a Navbar component successfully", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

});
