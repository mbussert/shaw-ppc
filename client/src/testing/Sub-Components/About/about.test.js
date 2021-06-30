import React from "react";
import { unmountComponentAtNode } from "react-dom";
import About from "../../../components/About/index.js";
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

describe("About", () => {

  it("renders without crashing and displays relevant text content", () => {

      shallow(<About />);

      expect(container.textContent).not.toBeNull();
    });

});