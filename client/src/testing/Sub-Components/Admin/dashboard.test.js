import React from "react";
import { unmountComponentAtNode } from "react-dom";
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

describe("Dashboard", () => {

  it("renders without crashing and displays relevant text content", () => {

      shallow(<Dashboard />);

      expect(container.textContent).not.toBeNull();
    });

});