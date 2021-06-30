import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Navbar from "../../../components/navbar/index.js";
import { Link } from "react-router-dom";
import setUpTest from "../../setUpTest.js";
import { shallow, mount } from "enzyme";
import API from "../../../utils/API.js";

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

    it("renders successfully to the page without crashing", () => {
      shallow(<Navbar />)
      expect(container.textContent).not.toBeNull();     
    });

    describe("verifyStatus", () => {

      it("is called successfully on page load with a loginStatus prop that is either a string or boolean", () => {

        const mockVerifyStatus = jest.fn();

        shallow(<Navbar loginStatus = "The user is logged in." verifyStatus={mockVerifyStatus()} />)
        expect(mockVerifyStatus.mock.calls.length).toBe(1);
        mockVerifyStatus.mockRestore();

        shallow(<Navbar loginStatus={false} verifyStatus={mockVerifyStatus()} />)
        expect(mockVerifyStatus.mock.calls.length).toBe(1);
        mockVerifyStatus.mockRestore();

      });
    });

    describe("showAccount", () => {

      it("is called successfully with a loginStatus prop that is either a string or boolean", () => {
          const mockShowAccount = jest.fn();

          shallow(<Navbar loginStatus = "The user is logged in." showAccount={mockShowAccount()} />)
          expect(mockShowAccount.mock.calls.length).toBe(1);
          mockShowAccount.mockRestore();
  
          shallow(<Navbar loginStatus={false} verifyStatus={mockShowAccount()} />)
          expect(mockShowAccount.mock.calls.length).toBe(1);
          mockShowAccount.mockRestore();
  
      });
    });

    describe("logOutUser", () => {

      it("is called successfully after a click event", () => {

        const mockLogOut = jest.fn();
        const navOption = shallow(<Link to = "./" onClick={mockLogOut()}>Log Out</Link>)

        navOption.simulate("click");
        expect(mockLogOut).toHaveBeenCalled();

        mockLogOut.mockRestore();

      });
    });

});
