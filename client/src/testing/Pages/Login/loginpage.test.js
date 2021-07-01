import React from "react";
import { unmountComponentAtNode } from "react-dom";
import LoginPage from "../../../pages/Login/Login.js";
import Header from "../../../components/Header/index.js";
import Navbar from "../../../components/navbar/index.js";
import Login from "../../../components/Login/index.js";
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

describe("the Login Page", () => {

  it("renders without crashing", () => {
    shallow(<LoginPage />);
  });

  it("renders a Header component, a Navbar component, and a Login component", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

});
