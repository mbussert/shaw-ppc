import React from "react";
import { unmountComponentAtNode } from "react-dom";
import CreatePage from "../../../pages/Create/Create.js";
import Header from "../../../components/Header/index.js";
import Navbar from "../../../components/navbar/index.js";
import CreateUser from "../../../components/createUser/index.js";
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

describe("the Create Page", () => {

  it("renders without crashing", () => {
    shallow(<CreatePage />);
  });

  it("renders a Header component, a Navbar component, and a CreateUser component", () => {
    const wrapper = shallow(<CreatePage />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(CreateUser)).toHaveLength(1);
  });

});
