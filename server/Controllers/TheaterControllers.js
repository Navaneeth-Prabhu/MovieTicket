const User = require("../Models/TheaterModel");
const Movie = require("../Models/MovieModel")
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

module.exports.addScreen =async(req,res,next)=>{
  try {
    
    const {name , row , col}=req.body
    const token = req.cookies.jwt;
    console.log(token);
    decoded = jwt.decode(token)
    id = decoded.id
    console.log("decoded",decoded.id);
    console.log("adsf",req.body);
    await User.findOneAndUpdate({_id:id},{$push:{Screen:{
      screenName :name,
      row:row,
      col:col
    }}}

    )

  } catch (error) {
    console.log('error');
  }
}

module.exports.getScreen = async(req,res,next)=>{
  try {
    const token = req.cookies.jwt;
    // console.log(token);
    decoded = jwt.decode(token)
    id = decoded.id
    console.log("decoded",decoded.id);
   
    let screen = await User.findOne({_id:id})
    console.log(screen.Screen);
    res.json(screen.Screen)
    // console.log(screen);
  } catch (error) {
    console.log(error);
  }
}

module.exports.getMovies = async(req,res,next)=>{
  try {
    let movie = await Movie.find({})
    res.json(movie)

  } catch (error) {
    console.log(error);
  }
}

module.exports.addShow = async(req,res,next)=>{
  try {
    console.log(req.body);
    const {ShowTime , name , price, status, screen} = req.body
    const token = req.cookies.jwt;
    decoded = jwt.decode(token)
    id = decoded.id
    console.log(screen);

    let show = await User.find({_id:id, "Screen.screenName":screen})

    console.log(show.length);
    // show.length
    if(show.length>0){
      let theater = await User.findOneAndUpdate({_id:id , "Screen.screenName":screen},{$set:{"Screen.$.show":{
        status:status, 
        movie:name,
        price:price,
        ShowTime:ShowTime
      }}})
      console.log("set",theater);
    }else{

      let theater = await User.findOneAndUpdate({_id:id },{$push:{"Screen.$.show":{
        status:status, 
        movie:name,
        price:price,
        ShowTime:ShowTime
      }}})
      console.log("push",theater);
    }
   
    
  } catch (error) {
    console.log(error);
  }
}

