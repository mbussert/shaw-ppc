const router = require('express').Router();
const { User, Wall } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', function(req, res) {
    res.send('Helloooooo')
    console.log("Hi!");
});

module.exports = router;