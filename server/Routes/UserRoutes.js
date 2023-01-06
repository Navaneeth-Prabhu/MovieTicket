var express = require('express');
var router = express.Router();
const {signup} = require('../Controllers/signup')
const {getImages,getMovieInformation,getMovie,allMovie}= require('../Controllers/MovieControllers')


router.get('/images/:key' ,getImages)

router.get('/movieInfo' ,getMovieInformation)
router.get('/moviedetails/:id',getMovie)
router.get('/movieInfo',allMovie)
router.post('/signup',signup);



module.exports = router