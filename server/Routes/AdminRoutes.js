const { Adminlogin , addStaff,getStaff,blockStaff,unblockStaff,TheaterList,approve,reject} = require("../Controllers/AdminControllers")
const {addMovieInfo ,addmovie} = require("../Controllers/MovieControllers")
const {getTheater} = require("../Controllers/messageController")
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

router.post("/")

router.post("/login",Adminlogin);
router.post("/addstaff",addStaff);
router.get("/staff",getStaff);
router.get("/theaterList",TheaterList);
router.get('/block/:id',blockStaff)
router.get('/unblock/:id',unblockStaff)
router.get('/approveTheater/:id',approve)
router.get('/rejectTheater/:id',reject)
router.get('/allTheater',getTheater)


router.post("/movieinfo", addMovieInfo);

module.exports = router