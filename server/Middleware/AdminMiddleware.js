const Admin = require("../Models/AdminModel");
const jwt = require("jsonwebtoken");
module.exports.verifyToken = async (req, res, next) => {
    try {        
        let token = req.header("Authorization").split(" ")[1];
        if (!token) {
          return res.status(403).json("Access Denied");
        }
        const check = jwt.verify(token, "TicketBooking");
        // console.log(check)
        if(check){
          const admin = await Admin.findById(check.id);
          if(admin.Block) {
            
            next();
          }
          else return res.status(403).json("Access Denied");
        }

    } catch (err) {
         res.status(500).json("Access Denied");
    }
};
