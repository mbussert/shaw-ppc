import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CreateUser from "../../../components/createUser/index.js";
import { BrowserRouter } from 'react-router-dom';
import setUpTest from "../../setUpTest.js";
import { shallow } from "enzyme";
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

describe("CreateUser", () => {

    it("renders without crashing and displays text content", () => {
        act(() => {
        render(
        <BrowserRouter>
          <CreateUser />
        </BrowserRouter>, container);
        });
        expect(container.textContent).not.toBeNull();
    });

    describe("handleInputChange", () => {

      it("updates when passed an onChange event", () => {
          const onChangeMock = jest.fn();

          const event = {
            target: { name: "first", value: 'Valerie' }
          };

          const inputField = shallow(<input
            className="add-first"
            type="text"
            name="first"
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
        const form = shallow(<form className="create-form" onSubmit={onSubmitMock} />)

        const userObject = {
          first: "Valerie",
          last: "Russell",
          email: "test@email.com",
          pass1: "testpassword",
          pass2: "testpassword",
          preventDefault: jest.fn()
        }

        form.simulate("submit", userObject);
        expect(onSubmitMock).toHaveBeenCalled();
        expect(onSubmitMock).toHaveBeenCalledWith(userObject);

        onSubmitMock.mockRestore();

      });

      it("does NOT call the API when the passwords do not match", async () => {

        const onSubmitMock = jest.fn().mockImplementation();
        const form = shallow(<form className="create-form" onSubmit={onSubmitMock} />)

        const userObject = {
          first: "Valerie",
          last: "Russell",
          email: "test@email.com",
          pass1: "testpassword",
          pass2: "test",
          preventDefault: jest.fn()
        }

        const mockAPI = jest.spyOn(API, 'saveUser');

        form.simulate("submit", userObject);
        expect(onSubmitMock).toHaveBeenCalled();
        expect(onSubmitMock).toHaveBeenCalledWith(userObject);
        expect(userObject.pass1).not.toBe(userObject.pass2);
        expect(mockAPI).not.toHaveBeenCalled();

        jest.restoreAllMocks();

      });

      it("does NOT call the API if an input field is missing", async () => {

        const onSubmitMock = jest.fn().mockImplementation();
        const form = shallow(<form className="create-form" onSubmit={onSubmitMock} />)

        const userObject = {
          first: "",
          last: "Russell",
          email: "test@email.com",
          pass1: "testpassword",
          pass2: "testpassword",
          preventDefault: jest.fn()
        }

        const mockAPI = jest.spyOn(API, 'saveUser');

        form.simulate("submit", userObject);
        expect(onSubmitMock).toHaveBeenCalled();
        expect(onSubmitMock).toHaveBeenCalledWith(userObject);
        expect(userObject.first).toBe("");
        expect(mockAPI).not.toHaveBeenCalled();

        jest.restoreAllMocks();

      });

    });
});
