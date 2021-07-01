import React from "react";
import { unmountComponentAtNode } from "react-dom";
import HowPage from "../../../pages/How/How.js";
import Header from "../../../components/Header/index.js";
import Navbar from "../../../components/navbar/index.js";
import VideoSection from "../../../components/videoSection/index.js";
import Facts from "../../../components/facts/index.js";
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

describe("the How Page", () => {

  it("renders without crashing", () => {
    shallow(<HowPage />);
  });

  it("renders a Header component, a Navbar component, a VideoSection component, and a Facts component", () => {
    const wrapper = shallow(<HowPage />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(VideoSection)).toHaveLength(1);
    expect(wrapper.find(Facts)).toHaveLength(1);
  });

});
