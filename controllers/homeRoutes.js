const router = require('express').Router();
const { User, Wall } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', function(req, res) {
    res.send('Helloooooo')
    console.log("Hi!");
});

router.get('/login', (req, res) => {
    console.log('Hiiiiii')
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;