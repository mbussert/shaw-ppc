const router = require('express').Router();
const { User } = require('../../models');

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

router.post('/', async (req, res) => {
    res.send('it hitssss')
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.email = userData.email;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        })
});

router.post("/login", async (req, res) => {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
  
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
  
    const validPassword = userData.checkPassword(req.body.password);
  
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
  
    req.session.save(() => {
      req.session.id = userData.id;
      req.session.loggedIn = true;
  
      res.json({ user: userData.email, message: "You are now logged in!" });
    });
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