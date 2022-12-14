var express = require('express');
var router = express.Router();
// const {signup} = require('../controllers/users/signup')
const {getImages,getMovieInformation}= require('../Controllers/MovieControllers')


router.get('/images/:key' ,getImages)

router.get('/movieInfo' ,getMovieInformation)




module.exports = router