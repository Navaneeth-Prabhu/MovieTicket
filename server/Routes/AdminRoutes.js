const { Adminlogin , addStaff,getStaff,blockStaff,unblockStaff,TheaterList,approve,reject} = require("../Controllers/AdminControllers")
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

module.exports = router