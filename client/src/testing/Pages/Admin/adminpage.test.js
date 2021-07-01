import React from "react";
import { unmountComponentAtNode } from "react-dom";
import AdminPage from "../../../pages/Admin/index.js";
import Header from "../../../components/Header/index.js";
import Dashboard from "../../../components/Admin/Dashboard/Dashboard.js";
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

describe("the Admin Page", () => {

  it("renders without crashing", () => {
    shallow(<AdminPage />);
  });

  it("renders one Navbar component and one Dashboard component", () => {
    const wrapper = shallow(<AdminPage />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });


});