const {register, login,addScreen,getScreen, getMovies,addShow,getAllTheater} = require("../Controllers/TheaterControllers")
// const{addMessage,getMessages} = require('../Controllers/messageController')
const router = require("express").Router();
const {checkTheater} = require("../Middleware/TheaterMiddleware")


router.post("/theater",checkTheater)
router.post("/reg",register);
router.post("/login",login);
router.post("/addScreen",addScreen);
router.get("/getScreen",getScreen);
router.get("/getMovies",getMovies);
router.post("/addShow",addShow);
router.get("/allTheater",getAllTheater);

// router.post("/addmsg", addMessage);
// router.post("/getmsg", getMessages);


module.exports = router