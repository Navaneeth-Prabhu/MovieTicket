const {register, login} = require("../Controllers/TheaterControllers")
const router = require("express").Router();
const {checkTheater} = require("../Middleware/TheaterMiddleware")


router.post("/theater",checkTheater)
router.post("/reg",register);
router.post("/login",login);

module.exports = router