import axios from "axios";

export default {
  // get all users
  getUser: function() {
    return axios.get('/api/users')
    .then((response) => {
      const allUsers = response.data;
      this.getAllUser(allUsers);
    })
  },

  authenticateUser: function() {
    return axios.get('/api/users/authenticate');
  },
  
  logOutUser: function() {
    return axios.post('/api/users/logout');
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
    return axios.post('/api/users', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
};