import React from "react";
import { unmountComponentAtNode } from "react-dom";
import AccountPage from "../../../pages/Account/Account.js";
import Header from "../../../components/Header/index.js";
import Navbar from "../../../components/navbar/index.js";
import ProjectList from "../../../components/ProjectList/index.js";
import ProjectDetails from "../../../components/ProjectDetails/index.js";

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

describe("the Account Page", () => {

  it("renders without crashing", () => {
    shallow(<AccountPage />);
  });

  it("renders a Navbar, Header, ProjectList, and ProjectDetails component", () => {
    const wrapper = shallow(<AccountPage />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ProjectList)).toHaveLength(1);
    expect(wrapper.find(ProjectDetails)).toHaveLength(1);
  });


});