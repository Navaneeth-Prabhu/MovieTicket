const {register, login,addScreen,getScreen, getMovies,addShow,getAllTheater,getShowsInformation,getshowMovie, deleteShowInfo} = require("../Controllers/TheaterControllers")
const {getAdmin, getTheater, getLatestMessage} = require("../Controllers/messageController")
const router = require("express").Router();
const {checkTheater,authTheater, verifyToken} = require("../Middleware/TheaterMiddleware");
const { theaterreservation, reservationDetails, reseravtionHistory } = require("../Controllers/ReservationControllers");


router.post("/theater",verifyToken)

router.post("/reg",register);

router.post("/login",login);

router.post("/addScreen",verifyToken,addScreen);

router.get("/getScreen/:id",verifyToken,getScreen);

router.get("/getMovies",verifyToken, getMovies);

router.post("/addShow",verifyToken,addShow);

router.get("/allAdminStaff",verifyToken,getAdmin);

router.get('/getScreenInfo/:date/:day/:id',verifyToken,getShowsInformation)

router.get('/getShowMovie/:id',verifyToken,getshowMovie)

router.post('/reservation/',verifyToken,theaterreservation)

router.get("/reservationDetails/:id",verifyToken, reservationDetails);

router.get("/:id/getAllReservations/:movieId",verifyToken,reseravtionHistory)

router.get("/latestMessage/:id",verifyToken,getLatestMessage)


module.exports = router