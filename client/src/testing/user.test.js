import { IsoTwoTone } from '@material-ui/icons';
import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CreateUser from './components/createUser';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

IsoTwoTone('renders user data', async () => {
    const notUser = {
        email: "may@yahoo.com", 
        password: "marcymay123",
        first: "Marcy",
        last: "May"
    };
    jest.spyOn(global, 'fetch').mockImplementation(() => 
    Promise.resolve({
        json: () => Promise.resolve(notUser)
    })
    );

    await act(async () => {
        render(<CreateUser />, container);
    });

    expect(container.querySelector('add-first').textContent).toBe(fakeUser.first);
    expect(container.querySelector('add-last').textContent).toBe(fakeUser.last);

    global.fetch.mockRestore();
});