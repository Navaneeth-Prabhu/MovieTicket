const router = require("express").Router();
const { session } = require("passport");
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  try {
    if (req.user) {
  
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        // cookies: req.cookies
      });
    }
  } catch (error) {
    console.log(error)
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie('session')
  // req.logout()
  res.redirect(CLIENT_URL);

});

router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;