import React from "react";
import { unmountComponentAtNode } from "react-dom";
import AboutPage from "../../../pages/About/index.js";
import About from "../../../components/About/index.js";
import Header from "../../../components/Header/index.js";
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

describe("the About Page", () => {

  it("renders without crashing", () => {
    shallow(<AboutPage />);
  });

  it("renders a Navbar, Header, and About component", () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(About)).toHaveLength(1);
  });


});