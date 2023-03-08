const asyncHandler = require("express-async-handler");
const Movie = require("../Models/MovieModel");
const Theater = require("../Models/TheaterModel");
const { uploadFile, getFileStream } = require("../Controllers/s3");
const util = require("util");
const User = require("../Models/UserModel");

const addMovieInfo = asyncHandler(async (req, res) => {
  try {
    const data = await Movie(req.body).save();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

const getMovieInformation = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find({});

    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});
const getMovie = asyncHandler(async (req, res) => {
  try {
    let id = req.params.id;

    const movie = await Movie.findOne({ _id: id });
    if (movie) {
      ReviewCount = movie.Review.length;
      ReviewSum = 0;
      for (let index = 0; index < ReviewCount; index++) {
        console.log(movie.Review[index].rating);
        ReviewSum = ReviewSum + movie.Review[index].rating;
      }
      Percentage = Math.round((ReviewSum / (5 * ReviewCount)) * 100);
    }

    const movieinfo = { movie, Percentage, ReviewCount };
    res.status(200).json(movieinfo);
  } catch (error) {
    console.log(error);
  }
});
const allMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find({});

    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});

const addReview = asyncHandler(async (req, res) => {
  try {
    const { movieId, rating, message, userEmail } = req.body;

    const userId = await User.findOne({ email: userEmail });
    const posting = await Movie.findOneAndUpdate(
      { _id: movieId },
      {
        $push: {
          Review: {
            userName: userId.name,
            rating: rating,
            message: message,
          },
        },
      }
    );
  } catch (error) {}
});
const getReview = asyncHandler(async (req, res) => {
  try {
    let id = req.params.id;

    const data = await Movie.findOne({ _id: id });
    res.status(200).json(data.Review);
  } catch (error) {}
});
const GetTheaterMovies = asyncHandler(async (req, res) => {
  try {
    const data = Theater.find({}).then((theaters) => {
      let movieIds = [];
      theaters.forEach((theater) => {
        theater.Screen.forEach((screen) => {
          screen.showInfo.forEach((show) => {
            movieIds.push(show.movieName);
          });
        });
      });
      const movies = Movie.find({ _id: { $in: movieIds } }).then((movies) => {
        return res.status(200).json(movies);
      });
    });

    // res.status(200).json(movies);
  } catch (error) {}
});

module.exports = {
  // addmovie,
  addMovieInfo,
  // getImages,
  getMovieInformation,
  getMovie,
  allMovie,
  addReview,
  getReview,
  GetTheaterMovies,
};
