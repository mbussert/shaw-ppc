import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Wrapper from "../../../components/Wrapper/index.js";

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

    it("renders successfully to the page with or without props", () => {
        act(() => {
        render(<Wrapper />, container);
        });
        expect(container.innerHTML).not.toBeNull();
        expect(container.innerHTML).not.toBeUndefined();

        act(() => {
            render(<Wrapper name="Test Prop" />, container);
            });
            expect(container.innerHTML).not.toBeNull();
            expect(container.innerHTML).not.toBeUndefined();
            expect(container.innerHTML).toContain("main", "wrapper");

    });

});