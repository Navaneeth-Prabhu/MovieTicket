const Theater = require("../Models/TheaterModel");
const jwt = require("jsonwebtoken");

module.exports.checkTheater = (req, res, next) => {
  const token = req.cookies;
  console.log("asdfasdfasdfasdf");
  console.log(token);
  if (token) {
    jwt.verify(
      token,
      "TicketBooking",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const theater = await Theater.findById(decodedToken.id);
          if (theater) res.json({ status: true, theater: theater.email });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
