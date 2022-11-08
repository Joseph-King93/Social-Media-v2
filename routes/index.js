var express = require("express");
var router = express.Router();
var passport = require("passport");

// import private route middleware
const isLoggedIn = require("../config/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home / Public Page" });
});

router.get("/private", isLoggedIn, function (req, res) {
  res.render("private", { title: "Private Page" });
});

// OAuth Routes

// Go to Google OAuth Login Menu
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// OAuth Callback Route to redirect back to our app after successfully logging in
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
