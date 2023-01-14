const asyncHandler = require("express-async-handler");
const Movie = require("../Models/MovieModel");
const Theater = require("../Models/TheaterModel");
const { uploadFile, getFileStream } = require("../Controllers/s3");
const fs = require("fs");
const util = require("util");

// const unlinkFile = util.promisify(fs.unlink)

const addmovie = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const { file } = req;
    console.log(file);
    const result = await uploadFile(file);
    //    await unlinkFile(file.path)
    console.log(result);
    return res.status(201).json({ status: true });
  } catch (error) {
    console.log(error);
  }
});

const addMovieInfo = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const data = await Movie(req.body).save();
    console.log("ddddddddddddddd", data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

const getImages = asyncHandler(async (req, res) => {
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

const getMovieInformation = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find({});
    //  console.log(movie)
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});
const getMovie = asyncHandler(async (req, res) => {
  try {
    let id = req.params.id;
    // console.log("iddddddddddddddd", id);
    const movie = await Movie.findOne({ _id: id });
    if(movie){
      ReviewCount = movie.Review.length
      ReviewSum=0
      for (let index = 0; index < ReviewCount; index++) {
        console.log(movie.Review[index].rating)
        ReviewSum = ReviewSum + movie.Review[index].rating        
      }
       Percentage = Math.round((ReviewSum)/(5*ReviewCount)*100)
    // console.log("review count ",ReviewCount ,ReviewSum,Percentage );
    }
    // moviePercentage = Percentage
    // movie.ReviewCount = ReviewCount
    console.log(movie)
const movieinfo ={movie,Percentage,ReviewCount}
    res.status(200).json(movieinfo);
  } catch (error) {
    console.log(error);
  }
});
const allMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find({});
    //  console.log(movie)
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});

const addReview = asyncHandler(async (req, res) => {
  try {
    const { movieId, rating, message } = req.body;
    console.log(movieId, rating, message);

    const posting = await Movie.findOneAndUpdate(
      { _id: movieId },
      {
        $push: {
          Review: {
            rating: rating,
            message: message,
          },
        },
      }
    );

    // console.log("posting", posting);
  } catch (error) {}
});
const getReview = asyncHandler(async (req, res) => {
  try {
    
    
    let id = req.params.id;
    console.log(id);
    const data = await Movie.findOne({ _id: id });
    res.status(200).json(data.Review);
  } catch (error) {}
});
const GetTheaterMovies = asyncHandler(async (req, res) => {
  try {

  const data = Theater.find({}).then(theaters => {
    let movieIds = [];
    theaters.forEach(theater => {
        theater.Screen.forEach(screen => {
            screen.showInfo.forEach(show => {
                movieIds.push(show.movieName);
            });
        });
    });
   const movies = Movie.find({ _id: { $in: movieIds } }).then(movies => {
        // console.log(movies);
        return res.status(200).json(movies)
    });
});

    console.log(hi);
    // res.status(200).json(movies);
    // console.log("posting", posting);
  } catch (error) {}
});

module.exports = {
  addmovie,
  addMovieInfo,
  getImages,
  getMovieInformation,
  getMovie,
  allMovie,
  addReview,
  getReview,
  GetTheaterMovies
};
