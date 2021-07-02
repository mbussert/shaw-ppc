const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
  try {

    const userData = await User.create(req.body);
    
    if (!userData) {
      res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" })
      .send('Incorrect email or password')
      console.log('\n', "Incorrect email or password", '\n');
    }

    res.status(200).json({ message: "You have successfully logged in!"});

  } catch(err) {
    res.status(500).json(err)
    console.log(err)
  }
});

router.get('/authenticate', async (req, res) => {

    if (req.session.loggedIn) {
        res.send({
            login: "The user is logged in.",
            userId: req.session.userId
        })
        return;
    } else {
        res.send(false)
        return;
    }

});

router.post("/login", async (req, res) => {

  try {

    const userData = await User.findOne({
      where: { email: req.body.email },
    });
  
    if (!userData) {
      return res.status(400).json({ message: "Incorrect email or password, please try again" })
    }
  
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" })
        // .send('Incorrect email or password')
        console.log('\n', "Incorrect email or password", '\n');
        return; 
    }
  
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.json({ user: userData.email, message: "You are now logged in!" })
      .send('You are now logged in')
      console.log('\n', "You are now logged in", '\n');
      return; 
    })

  } catch(err) {
    res.status(500).json(err)
    console.log(err)
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
