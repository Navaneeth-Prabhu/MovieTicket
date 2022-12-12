const Admin = require("../Models/AdminModel");
const Theater = require("../Models/TheaterModel")
const jwt = require("jsonwebtoken");
// const Application = require("../models/ApplicationModels")
// const Admin = require("../models/AdminModels");
const { response } = require("express");
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
        // console.log("admin",req.body);
        const {email,password}=req.body;
        console.log(req.body);
        const admin = await Admin.findOne({email,password});
        console.log("aa",admin);
        if(!admin.block){
            // console.log("helooooooooooooooooooooooooooooooooooo");

            const token = createToken(admin._id);

            res.cookie("jwt",token,{
                withCrdentials:true,
                httpOnly:false,
                message:maxAge * 1000,
            })
            res.status(200).json({admin:admin._id,created:true})
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

// module.exports.Adminlogin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await Admin.login(email, password);
//     const token = createToken(user._id);
//     res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
//     res.status(200).json({ user: user._id, status: true });
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.json({ errors, status: false });
//   }
// };
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
    let id = req.params.id;
    console.log("helo");
    // const {id} = req.body
    console.log("asdfasdf",id);
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
    let id = req.params.id;
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

module.exports.approve = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("asdfasdf",id);
    const user = await Theater.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { isApproved: true } }
    );

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
module.exports.reject = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("unblock");
    // const {id} = req.body
    const user = await Theater.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { $set: { isApproved: false } }
    );

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};