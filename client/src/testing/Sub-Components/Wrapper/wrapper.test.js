import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Wrapper from "../../../components/Wrapper/index.js";
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

describe("Wrapper", () => {
  
  it ("renders successfully to the page with or without props", () => {
 
      shallow(<Wrapper />)
      expect(container.textContent).not.toBeNull();  
      
      shallow(<Wrapper name="Test Prop" />);
      expect(container.textContent).not.toBeNull();  

  })
})