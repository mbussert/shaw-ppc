import React from "react";
import axios from "axios";
import API from "../../utils/API.js";
jest.mock('axios');

describe("the functionality of the API", () => {

    describe("getUser", () => {
        it("returns all users", () => {
            const users = [
                { first: 'Robert', last: 'Mullens', email: 'rm@email.com' }, 
                { first: 'Ben', last: 'Mullens', email: 'bm@email.com' }, 
                { first: 'Elizabeth', last: 'Mullens', email: 'em@email.com' }
            ];
            const resp = {data: users};
            axios.get.mockResolvedValue(resp);
            return API.getUser().then(response => expect(response.data).toEqual(users));
        });
      
    });

    describe("authenticateUser", () => {

        it("authenticates a user", () => {
            const resp = "The user is logged in";
            axios.get.mockResolvedValue(resp);
            return API.authenticateUser().then(response => expect(response).toBe(resp))
        });
      
    });

    describe("logOutUser", () => {

        it("logs out a user through a POST request", () => {
            const resp = "The user is logged out.";
            axios.post.mockResolvedValue(resp);
            return API.logOutUser().then(response => expect(response).toBe(resp))
        });
      
    });

    describe("saveUser", () => {

        it("saves a single user to the database", () => {
            const user = { first: 'Elizabeth', last: 'Mullens', email: 'em@email.com' }
            const resp = { data: user};
            axios.post.mockResolvedValue(resp);

            return API.saveUser().then(response => expect(response.data).toEqual(user));
        });
      
    });

    describe("getOrders", () => {

        it("retrieves all customer orders from the database", () => {
      
            const orders = [
                { id: 1, width: 200, height: 200, linearFeet: 93 }, 
                { id: 2, width: 300, height: 300, linearFeet: 186 }, 
                { id: 3, width: 400, height: 400, linearFeet: 242 }
            ];
            const resp = {data: orders};
            axios.get.mockResolvedValue(resp);
            return API.getOrders().then(response => expect(response.data).toEqual(orders));

        });
      
    });

    describe("getOrdersById", () => {

        it("retrieves one order when passed an ID", () => {
      
            const orders = [
                { id: 1, width: 200, height: 200, linearFeet: 93 }, 
                { id: 2, width: 300, height: 300, linearFeet: 186 }, 
                { id: 3, width: 400, height: 400, linearFeet: 242 }
            ];

            const resp = orders[0];

            axios.get.mockResolvedValue(resp);
            return API.getOrdersById(0).then(response => expect(response).toEqual(resp));
   
        });
      
    });

    describe("saveOrder", () => {

        it("saves a single order to the database", () => {
      
            const order = { id: 1, width: 200, height: 200, linearFeet: 93 };

            const resp = { data: order };

            axios.post.mockResolvedValue(resp);
            return API.saveOrder().then(response => expect(response.data).toEqual(order));

        });
      
    });

});
