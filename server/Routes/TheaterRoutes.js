const {register, login,addScreen,getScreen, getMovies,addShow} = require("../Controllers/TheaterControllers")
const router = require("express").Router();
const {checkTheater} = require("../Middleware/TheaterMiddleware")


router.post("/theater",checkTheater)
router.post("/reg",register);
router.post("/login",login);
router.post("/addScreen",addScreen);
router.get("/getScreen",getScreen);
router.get("/getMovies",getMovies);
router.post("/addShow",addShow);

module.exports = router