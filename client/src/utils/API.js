import axios from "axios";

export default {
  // get all users
  getUser: function() {
    return axios.get('/api/users')
  },

  // Authenticate a single user
  authenticateUser: function() {
    return axios.get('/api/users/authenticate');
  },
  
  // Log out a single user
  logOutUser: function() {
    return axios.post('/api/users/logout');
  },

  // Saves a user when an account is created
  saveUser: function(userData) {
    return axios.post('/api/users', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  // Get all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Get the order with the given id
  getOrdersById: function(id) {
    return axios.get("/api/account/" + id);
  },
  // Save an order to the database
  saveOrder: function(orderData) {
    return axios.post("/api/orders", orderData, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
  },

  deleteOrder: function(id) {
    return axios.delete("/api/orders/" + id);
  },

  sendMessage: function(messageData) {
    return axios.post("/api/message", messageData, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
  },
  
};