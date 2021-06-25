const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  console.log("Hellooooo");
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
