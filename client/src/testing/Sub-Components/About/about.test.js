import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import About from "../../../components/About/index.js";

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

it("renders an h1 with textContent that says 'About Me Page' ", () => {
    act(() => {
      render(<About />, container);
    });
    expect(container.innerHTML).not.toBeNull();
    expect(container.innerHTML).not.toBeUndefined();
    expect(container.innerHTML).toContain(`<h1>`);
    expect(container.textContent).toBe("About Me Page");
  });

});