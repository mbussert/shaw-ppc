const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        })
});

router.post('/login', async (req, res) => {
    console.log(req.body)
        const userData = await User.findOne({ where: { username: req.body.username}});
        if(!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'});
            return;
        }
// console.log(userData)
        const correctPass = userData.checkPassword(req.body.password);

        if (!correctPass) {
            res.status(400).json({ message: 'Incorrect username of password, please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You have successfully logged in!' });
        })
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

module.exports = router;