var express = require('express');
var router = express.Router();
const {signup,otp} = require('../Controllers/signup')
const {getImages,getMovieInformation,getMovie,allMovie,addReview,getReview,GetTheaterMovies}= require('../Controllers/MovieControllers')
const { reservation ,getSeatsInformation} = require("../Controllers/ReservationControllers");

router.get('/images/:key' ,getImages)

// router.get('/movieInfo' ,getMovieInformation)
router.get('/moviedetails/:id',getMovie)

router.get('/movieInfo',allMovie)

router.post("/signup", signup);

router.post("/otp", otp);

router.post('/reviews',addReview);

router.get('/getAllReview/:id',getReview);

router.post('/reservation',reservation)

router.get('/GetTheaterMovies',GetTheaterMovies)

router.post('/reservation/getSeatInfo',getSeatsInformation)



module.exports = router