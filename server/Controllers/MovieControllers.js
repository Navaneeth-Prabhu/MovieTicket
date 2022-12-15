const asyncHandler = require("express-async-handler");
const Movie = require('../Models/MovieModel');
const { uploadFile,getFileStream } = require("../Controllers/s3");
const fs = require('fs')
const util = require('util')

// const unlinkFile = util.promisify(fs.unlink)


const addmovie = asyncHandler(async(req,res)=>{
    try {
       console.log(req.params.id +'adsaf') 
       const id = req.params.id
       const { file } = req;
       console.log(file)
       const result = await uploadFile(file);
    //    await unlinkFile(file.path)
       console.log(result);
       return res.status(201).json({ status:true });
    } catch (error) {
        console.log(error)
    }
})

const addMovieInfo = asyncHandler(async(req,res)=>{
    try {      
        console.log("helloo");
        console.log(req.body);
        const data = await Movie(req.body).save() 
        console.log("ddddddddddddddd",data);    
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

const getImages = asyncHandler(async(req, res) => {
    try {
    //   console.log(req.params);
      const key = req.params.key;
      const readStream = getFileStream(key);
      // console.log(readStream)
      readStream.pipe(res);
    } catch (error) {
      console.log(error);
    }
  });
  
  const getMovieInformation = asyncHandler(async(req,res)=>{
      try {
         const movie = await Movie.find({})
        //  console.log(movie)
         res.status(200).json(movie)
      } catch (error) {
          console.log(error)
      }
  })


module.exports = {
    addmovie,
    addMovieInfo,
    getImages,
    getMovieInformation
}