import React from "react";
import { unmountComponentAtNode } from "react-dom";
import ContactPage from "../../../pages/Contact/Contact.js";
import Header from "../../../components/Header/index.js";
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

describe("the Contact Page", () => {

  it("renders without crashing", () => {
    shallow(<ContactPage />);
  });

  it("renders one Header component and one ContactForm component", () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ContactForm)).toHaveLength(1);
  });

});
