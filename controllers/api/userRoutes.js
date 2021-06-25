const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
  try {

    const userData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    })
    if (!userData) {
      res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" })
      return; 
    }
  } catch(err) {
    res.status(500).json(err)
    console.log(err)
  }
});

router.post("/login", async (req, res) => {
  const userData = await User.findOne({
    where: { email: req.body.email },
  });

  if (!userData) {
    res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" })
      return; 
  }

  const validPassword = userData.checkPassword(req.body.password);
  if (!validPassword) {
    res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" })
      return; 
  }

  req.session.save(() => {
    req.session.id = userData.id;
    req.session.loggedIn = true;
    res.json({ user: userData.email, message: "You are now logged in!" })
    return; 
  });
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
