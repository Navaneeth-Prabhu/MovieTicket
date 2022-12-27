var express = require('express');
var router = express.Router();
const {signup} = require('../Controllers/signup')
const {getImages,getMovieInformation}= require('../Controllers/MovieControllers')


router.get('/images/:key' ,getImages)

router.get('/movieInfo' ,getMovieInformation)
router.get('/movieDetails/:id')
router.post('/signup',signup);



module.exports = router