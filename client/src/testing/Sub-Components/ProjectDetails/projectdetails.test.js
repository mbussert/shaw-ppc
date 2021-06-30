import React from "react";
import { unmountComponentAtNode } from "react-dom";
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

describe("ProjectDetails", () => {

  it("renders successfully to the page without crashing", () => {

    shallow(<ProjectDetails />)
    expect(container.textContent).not.toBeNull();     

  });
});
