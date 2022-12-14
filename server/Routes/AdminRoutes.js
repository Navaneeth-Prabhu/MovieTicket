const { Adminlogin , addStaff,getStaff,blockStaff,unblockStaff,TheaterList,approve,reject} = require("../Controllers/AdminControllers")
const {addMovieInfo} = require("../Controllers/MovieControllers")
const router = require("express").Router();



router.post("/")

router.post("/login",Adminlogin);
router.post("/addstaff",addStaff);
router.get("/staff",getStaff);
router.get("/theaterList",TheaterList);
router.get('/block/:id',blockStaff)
router.get('/unblock/:id',unblockStaff)
router.get('/approveTheater/:id',approve)
router.get('/rejectTheater/:id',reject)


router.post("/movieinfo", addMovieInfo);
// router.get("/api/users/movieInfo",movieInfo)

module.exports = router