const { Adminlogin , addStaff,getStaff,blockStaff,unblockStaff,UserList,TheaterList,approve,reject} = require("../Controllers/AdminControllers")
const {addMovieInfo ,editMovie,addmovie,reservationDetails,topReserved,deleteMovie} = require("../Controllers/MovieControllers")
const {getTheater, getLatestMessage} = require("../Controllers/messageController")
const router = require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: "./public/movies/",
    filename: (req, file, cb) => {
      req.imageName = `${req.params.id}.jpg`;
      cb(null, req.imageName);
    },
  });
  
  const upload = multer({
    storage: storage,
  });


// router.post("/admin")

router.get("/staff",getStaff);
router.get("/theaterList",TheaterList);
router.get("/userList",UserList);
router.get('/block/:id',blockStaff)
router.get('/unblock/:id',unblockStaff)
router.get('/approveTheater/:id',approve)
router.get('/rejectTheater/:id',reject)
router.get('/allTheater',getTheater)
router.get('/latestMessage/:id',getLatestMessage)
router.get("/reservationDetails", reservationDetails);
router.get("/topReserved", topReserved);

router.post("/login",Adminlogin);
router.post("/addstaff",addStaff);
router.post("/movieinfo", addMovieInfo);
router.post("/editMovie/:id", editMovie);
router.post("/deleteMovie/:id", deleteMovie);


module.exports = router