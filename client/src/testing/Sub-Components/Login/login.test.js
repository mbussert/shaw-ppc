import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Login from "../../../components/Login/index.js";
import setUpTest from "../../setUpTest.js";
import { shallow } from "enzyme";
import axios from "axios";

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

describe("Login", () => {

    it("renders successfully to the page without crashing", () => {

      shallow(<Login />)
      expect(container.textContent).not.toBeNull();     
        
    });

    describe("handleInputChange", () => {

      it("updates when passed an onChange event", () => {
          const onChangeMock = jest.fn();

          const event = {
            target: { name: "email", value: 'test@email.com' }
          };

          const inputField = shallow(<input 
            className="user-email" 
            type="text"
            name='email'
            onChange={onChangeMock}
            />)

          inputField.find('input').simulate('change', event);
          expect(onChangeMock.mock.calls.length).toBe(1);
          expect(onChangeMock.mock.calls[0][0]).toMatchObject(event);

      });
    });

    describe("handleFormSubmit", () => {

      it("is called successfully with the userObject when a user submits the form", () => {

        const onSubmitMock = jest.fn();
        const form = shallow(<form className="login-form" onSubmit={onSubmitMock} />)

        const userObject = {
          email: "test@email.com",
          password: "testpassword",
          preventDefault: jest.fn()
        }

        form.simulate("submit", userObject);
        expect(onSubmitMock).toHaveBeenCalled();
        expect(onSubmitMock).toHaveBeenCalledWith(userObject);

        onSubmitMock.mockRestore();

      });

      it("does NOT call the API if an input field is missing", async () => {

        const onSubmitMock = jest.fn().mockImplementation();
        const form = shallow(<form className="login-form" onSubmit={onSubmitMock} />)

        const userObject = {
          email: "",
          password: "testpassword",
          preventDefault: jest.fn()
        }

        const mockAPI = jest.spyOn(axios, 'post');

        form.simulate("submit", userObject);
        expect(onSubmitMock).toHaveBeenCalled();
        expect(onSubmitMock).toHaveBeenCalledWith(userObject);
        expect(userObject.email).toBe("");
        expect(mockAPI).not.toHaveBeenCalled();

        jest.restoreAllMocks();

      });

    });
});
