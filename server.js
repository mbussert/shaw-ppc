const express = require("express");
const session = require("express-session");
const path = require("path");
const apiRoutes = require("./controllers/api");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
<<<<<<< HEAD
// app.use(express.urlencoded({ extended: true }));
app.post('/login', 
  passport.authenticate('local'), 
  function(email, password, done) {
=======
app.use(express.urlencoded({ extended: true }));
app.post(
  "/login",
  passport.authenticate("local"),
  function (email, password, done) {
>>>>>>> 954efdddf9e6005d6113643956c4cb5e1b8dc433
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  }
);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
