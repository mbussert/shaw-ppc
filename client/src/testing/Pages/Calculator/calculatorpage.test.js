import React from "react";
import { unmountComponentAtNode } from "react-dom";
import CalculatorPage from "../../../pages/Calculator/Calculator.js";
import Header from "../../../components/Header/index.js";
import Navbar from "../../../components/navbar/index.js";
import Modal from "../../../components/modal/Modal.js";
import Project from "../../../components/Project/index.js";
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

describe("the Calculator Page", () => {

  it("renders without crashing", () => {
    shallow(<CalculatorPage />);
  });

  it("renders a Navbar, Header, Modal, and Project component", () => {
    const wrapper = shallow(<CalculatorPage />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

});