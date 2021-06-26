import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import VideoSection from "../../../components/videoSection/index.js";

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

describe("VideoSection", () => {

    it("renders successfully to the page", () => {
        act(() => {
        render(<VideoSection />, container);
        });
        expect(container.innerHTML).not.toBeNull();
        expect(container.innerHTML).not.toBeUndefined();
        expect(container.innerHTML).toContain("h1", "https", "react-player");

    });

});