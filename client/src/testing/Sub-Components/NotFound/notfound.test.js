import React from "react";
import { unmountComponentAtNode } from "react-dom";
import NotFound from "../../../components/NotFound/index.js";
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

describe("NotFound", () => {

  it("renders successfully to the page without crashing", () => {
    shallow(<NotFound />)
    expect(container.textContent).not.toBeNull();     
  });
});
