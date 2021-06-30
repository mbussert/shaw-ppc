import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Header from "../../../components/Header/index.js";
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

describe("Header", () => {

    it("renders successfully to the page without crashing", () => {

      shallow(<Header />)
      expect(container.textContent).not.toBeNull();

    });
});
