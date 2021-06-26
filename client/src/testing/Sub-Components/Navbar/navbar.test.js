import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Navbar from "../../../components/navbar/index.js";
import { BrowserRouter } from 'react-router-dom';

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

describe("Navbar", () => {

    it("renders successfully to the page", () => {
        act(() => {
        render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>, container);
        });
        expect(container.innerHTML).not.toBeNull();
        expect(container.innerHTML).not.toBeUndefined();
        expect(container.innerHTML).toContain("nav", "ul", "li", "Link");
    });
});
