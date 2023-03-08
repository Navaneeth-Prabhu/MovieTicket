const {register, login,addScreen,getScreen, getMovies,addShow,getAllTheater,getShowsInformation,getshowMovie, deleteShowInfo} = require("../Controllers/TheaterControllers")
const {getAdmin, getTheater} = require("../Controllers/messageController")
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

router.get('/getShowMovie/:id',getshowMovie)
// router.delete('/:id/shows/:screenIndex/:showIndex',deleteShowInfo)
// router.post('/showDelete',deleteShowInfo)


module.exports = router