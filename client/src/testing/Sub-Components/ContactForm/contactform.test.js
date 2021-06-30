import React from "react";
import { unmountComponentAtNode } from "react-dom";
import ContactForm from "../../../components/ContactForm/ContactForm.js";
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

describe("ContactForm", () => {

  it("renders without crashing and displays relevant text content", () => {

      shallow(<ContactForm />);
      expect(container.textContent).not.toBeNull();

    });

});