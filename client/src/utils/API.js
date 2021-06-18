
import axios from 'axios';

export default {
    saveUser: function(userData) {
        return axios.post('/api/users', userData);
    },

    getUser: function(userData) {
        return axios.get('/api/users', userData);
    }
}
