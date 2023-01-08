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
    console.log('errorrr');
  }
}

module.exports.getScreen = async(req,res,next)=>{
  try {
    let id = req.params.id;
   console.log("iiiiiiiiiiiiiiddddddd",id);
    let screen = await User.findOne({_id:id})
    console.log(screen.Screen);
    res.json(screen.Screen)
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


module.exports.getAllTheater = async (req, res, next) => {
  try {
    // console.log("req.id",req.params.id)
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "theater",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.getShowsInformation = async(req, res,next) => {
  try {
    console.log("hhhhhhhhhhhhelllllloooooo");
    const date = req.params.date;
    const day = req.params.day;
    const id = req.params.id;
    console.log(date, day, id);
    const data = await User.find(
      { "Screen.showInfo.movieName": id },
      { "Screen.showInfo.$": 1, theater: 1 }
    );
    console.log("data",data);
    let gotDate = [];
    for (let i = 0; i < data.length; i++) {
      // gotDate.push(data[i].theater)
      const start = new Date(data[i].Screen[0].showInfo[0].startDate);
      const end = new Date(data[i].Screen[0].showInfo[0].endDate);
      console.log(start.getDate(),end.getDate())
      if (date >= start.getDate() && date <= end.getDate()) {
        console.log("helloo")
        console.log(start.getDate())
        console.log(end.getDate())
        console.log(date)
        gotDate.push({
          theaterName: data[i].theater,
          data: data[i].Screen[0].showInfo[0],
        });
      }
    }
    console.log("gotDate",gotDate);
    res.json(gotDate);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addShow = async (req, res) => {
  try {
    console.log(req.body);
    const { id, screen, time, movieName, dateData } = req.body;
    const data = await User.findOne({
      Screen: { $elemMatch: { screenName: screen } },
    }).select("Screen");
    // console.log(data.Screen);
    const gotScreen = data.Screen.filter((val) => val.screenName === screen);

    const movieid = await User.findOne({
      _id: req.body.theaterId,
      Screen: {
        $elemMatch: { showInfo: { $elemMatch: { movieName: movieName } } },
      },
    }).select("Screen");
    console.log(movieid);
    if (movieid) {
      for (let i = 0; i < req.body.dateData.length; i++) {
        const hi = await User.updateOne(
          {
            _id:id,
            Screen: {
              $elemMatch: {
                showInfo: { $elemMatch: { movieName: movieName } },
              },
            },
          },
          { $push: { "Screen.$.showInfo.0.dateData": req.body.dateData[i] } }
        );

        console.log(hi);
      }
    } else {
      const updatingSeats = await User.updateOne(
        {
          _id: id,
          Screen: { $elemMatch: { screenName: gotScreen[0].screenName } },
        },
        { $push: { "Screen.$.showInfo": req.body } }
      );
      console.log(updatingSeats);
      res.json({ status: "true" });
    }

    // console.log(movieid.Screen[0].showInfo)

    // console.log(gotScreen[0]);
    // let date = [time]
    // let seating = [];
    // let seats = [];
    // for (let i = 0; i < date.length; i++) {
    //   let time = date[i];
    //   for (let i = 0; i < gotScreen[0].row; i++) {
    //     let arr = [];
    //     let id = String.fromCharCode(i + 65);
    //     for (let j = 0; j < gotScreen[0].Numbers; j++) {
    //       arr.push({ index: `${id}${j + 1}`, isReserved: false, user: "" });
    //     }
    //     seats.push(arr);
    //   }
    //   seating.push({ time, seats });
    // }
    // console.log(seating);
  } catch (error) {
    console.log(error);
  }
};
