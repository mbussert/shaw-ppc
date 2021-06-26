import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NotFound from "../../../components/NotFound/index.js";
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

describe("NotFound", () => {

    it("renders successfully to the page", () => {
        act(() => {
        render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>, container);
        });
        expect(container.innerHTML).not.toBeNull();
        expect(container.innerHTML).not.toBeUndefined();
        expect(container.innerHTML).toContain("h1", "button", "Link", "404");
    });
});
