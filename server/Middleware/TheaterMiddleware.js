const Theater = require("../Models/TheaterModel");
const jwt = require("jsonwebtoken");

// app.use(cookieParser());
module.exports.checkTheater = (req, res, next) => {
  const token = req.cookies;
  console.log(token,"tokennnn")
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
    // next();
  }
};



module.exports.verifyToken = async (req, res, next) => {
    try {

        
        let token = req.header("Authorization").split(" ")[1];

        if (!token) {
          return res.status(403).json("Access Denied");
        }


        const check = jwt.verify(token, "TicketBooking");
        // console.log(check)
        if(check){
          const theater = await Theater.findById(check.id);
          if(theater.isApproved) {
            
            next();
          }
          else return res.status(403).json("Access Denied");
        }

    } catch (err) {
         res.status(500).json("Access Denied");
    }
};
