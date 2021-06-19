import axios from "axios";

export default {
  // Get all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Get the order with the given id
  getOrder: function(id) {
    return axios.get("/api/orders" + id);
  },
  // Save an order to the database
  // This hasn't been working correctly with the proxy (in the client package.json)
  saveOrder: function(orderData) {
    return axios.post("/api/orders", orderData, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
  },
  // Saves a user when an account is created
  saveUser: function(userData) {
    return axios.post('/api/users', userData);
}
};