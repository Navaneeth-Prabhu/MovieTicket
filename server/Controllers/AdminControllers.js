const Admin = require("../Models/AdminModel");
const Theater = require("../Models/TheaterModel")
const jwt = require("jsonwebtoken");

const { response } = require("express");
const User = require("../Models/UserModel");
// const { Sanitizer } = require("sanitize");
// const { default: Movie } = require("../../client/src/pages/Admin/Movies");
const { ObjectId } = require("mongoose").Types;
const maxAge = 1 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "TicketBooking", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "incorrect email") {
    errors.email = "Email is not registered";
  }
  if (err.message === "incorrect password") {
    errors.email = "incorrect password";
  }
  if (err.message === "blocked") {
    errors.email = "you are blocked";
  }
  if (err.code === 11000) {
    errors.email = "email is already register";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.Adminlogin = async(req,res,next)=> {

  try {
      const {email,password}=req.body;
      const user = await Admin.login(email,password);

      if(!user.Block){

          const token = createToken(user._id);
  
          // res.cookie("adminjwt",token,{
          //     withCrdentials:true,
          //     httpOnly:false,
          //     message:maxAge * 1000,
          // })
          res.status(200).json({user:user._id,created:true,token})
      }else{
          console.log("blocked")
                 
          res.json({errors:"blocked",created:false})
      }
  } catch (err) {

      const errors = handleErrors(err)
      console.log("errrr",errors);
      res.json({errors,created:false})
  }
};

module.exports.addStaff = async (req, res, next) => {
  try {
    const { email, password,name } = req.body;
    const admin = await Admin.create({ email, password ,name});
    res.json(admin)
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.getStaff = async (req, res, next) => {
  try {
    const staff = await Admin.find({});
    res.json(staff);
  } catch (err) {
    console.log(err);

    res.json({ errors });
  }
};

module.exports.blockStaff = async (req, res) => {
  try {
    let id = req.params.id    

    const user = await Admin.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { Block: true } }
    );

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
module.exports.unblockStaff = async (req, res) => {
  try {
    let id = req.params.id  
    console.log("unblock");
    // const {id} = req.body
    const user = await Admin.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { Block: false } }
    );

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
module.exports.TheaterList = async(req,res)=>{
  try{
    const theater = await Theater.find({})
    res.json(theater)
  }catch(err){
    console.log(err)
  }
}
module.exports.UserList = async(req,res)=>{
  try{
    const users = await User.find({})
    res.json(users)
  }catch(err){
    console.log(err)
  }
}

module.exports.approve = async (req, res) => {
  try {
    let id = req.params.id    
    const user = await Theater.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { isApproved: true } }
      ); 
      
      res.json(user);
    } catch (err) {
      console.log(err);
      //try later 
    }
  
};
module.exports.reject = async (req, res) => {
  try {
    let id = req.params.id;

    const user = await Theater.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { isApproved: false } }
    );

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

