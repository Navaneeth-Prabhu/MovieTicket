const User = require("../models/UserModels");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    // console.log("in authmiddleware");
    jwt.verify(
      token,
      "TicketBooking",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          // next();
        } else {
          const user = await User.findById(decodedToken.id);
          
          if (user) res.json({ status: true, user: user.email });
          else res.json({ status: false});
          // next();
        }
      }
    );
  } else {
    res.json({ status: false });
    // next();
  }
};