const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    let userToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3d",
    });
    resolve(userToken);
  });
};


module.exports = { generateToken };