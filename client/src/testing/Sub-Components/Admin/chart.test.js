import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Chart from "../../../components/Admin/Chart/Chart.js";
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

describe("Chart", () => {

  it("renders without crashing and displays relevant text content", () => {

      shallow(<Chart />);

      expect(container.textContent).not.toBeNull();
    });

});