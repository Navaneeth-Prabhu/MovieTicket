const User = require("../Models/TheaterModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "TicketBooking", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }
  if(err.message === "blocked"){
    errors.email = "you are blocked"
    
}

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password,name,theater,city,address,state } = req.body;
    const user = await User.create({ email, password,name,theater,city,address,state });


    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

// module.exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.login(email, password);
//     const token = createToken(user._id);
//     res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
//     res.status(200).json({ user: user._id, status: true });
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.json({ errors, status: false });
//   }
// };
module.exports.login = async(req,res,next)=> {

  try {
      const {email,password}=req.body;
      const user = await User.login(email,password);
      console.log("aaaaaaaaaaa",user);
      if(user.isApproved){

          const token = createToken(user._id);
  
          res.cookie("jwt",token,{
              withCrdentials:true,
              httpOnly:false,
              message:maxAge * 1000,
          })
          res.status(200).json({user:user._id,created:true})
      }else{
          console.log("blocked")
                 
          res.json({errors:"blocked",created:false})
      }
  } catch (err) {
      // console.log(err.message);
      const errors = handleErrors(err)
      console.log("errrr",errors);
      res.json({errors,created:false})
  }
};