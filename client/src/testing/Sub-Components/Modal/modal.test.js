import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Modal from "../../../components/modal/Modal.js";
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

describe("Modal", () => {

    it("renders successfully to the page", () => {

      shallow(<Modal />)
      expect(container.textContent).not.toBeNull();     
        
    });

});