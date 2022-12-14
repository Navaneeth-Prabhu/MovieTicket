const {register, login,addScreen,getScreen, getMovies,addShow,getAllTheater,getShowsInformation} = require("../Controllers/TheaterControllers")
const {getAdmin} = require("../Controllers/messageController")
// const{addMessage,getMessages} = require('../Controllers/messageController')
const router = require("express").Router();
const {checkTheater} = require("../Middleware/TheaterMiddleware")


router.post("/theater",checkTheater)
router.post("/reg",register);
router.post("/login",login);
router.post("/addScreen",addScreen);
router.get("/getScreen/:id",getScreen);
router.get("/getMovies",getMovies);
router.post("/addShow",addShow);
router.get("/allAdminStaff",getAdmin);
// router.get("/allTheater/:id",getAllTheater);

// router.post("/addmsg", addMessage);
// router.post("/getmsg", getMessages);
router.get('/getScreenInfo/:date/:day/:id',getShowsInformation)


module.exports = router