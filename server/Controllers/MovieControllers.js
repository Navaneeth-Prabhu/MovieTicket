const asyncHandler = require("express-async-handler");
const Movie = require("../Models/MovieModel");
const Theater = require("../Models/TheaterModel");
const { uploadFile, getFileStream } = require("../Controllers/s3");
const util = require("util");
const User = require("../Models/UserModel");
const Reservation = require("../Models/ReservationModel");

const addMovieInfo = asyncHandler(async (req, res) => {
  try {
    const data = await Movie(req.body).save();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});
const editMovie = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
          screen?.showInfo?.forEach((show) => {
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

const deleteMovie = asyncHandler(async (req, res) => {
  try {
    console.log("..........asdfasdf.");
    let id = req.params.id;
    const data = await Movie.deleteOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {}
});
const reservationDetails = asyncHandler(async (req, res) => {
  try {
    const movies = await Reservation.find({});
    return res.status(200).json(movies);
  } catch (error) {}
});
const topReserved = asyncHandler(async (req, res) => {
  // Reservation.aggregate([
  //   { $group: { _id: '$movieId', count: { $sum: 1 } } },

  //   { $sort: { count: -1 } },
  //   { $limit: 5 },
  // ]).exec((err, topMovies) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  
  //   // Get the details for the top 5 reserved movies
  //   const topMovieIds = topMovies.map((movie) => movie._id);
  
  //   Movie.find({ _id: { $in: topMovieIds } }, (err, movies) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //    console.log(movies)
  //     // Do something with the movie details
     
  //   });
  // });
  Reservation.aggregate([
    { $group: { _id: '$movieId', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: 'movies',
        localField: '_id',
        foreignField: '_id',
        as: 'movieDetails'
      }
    }
  ]).exec((err, topMovies) => {
    if (err) {
      console.error(err);
      return;
    }
  // console.log(topMovies)
    const moviesArray = topMovies.map((movie) => ({
      title: movie.movieDetails[0]?.title,
      director: movie.movieDetails[0]?.director,
      year: movie.movieDetails[0]?.year,
      Image: movie.movieDetails[0]?.PosterImg,
      count: movie.count,
    }));
    return res.json(moviesArray);
    // Log the details of the top 5 reserved movies
    // console.log('Top 5 reserved movies:',topMovies);
    // topMovies.map((movie) => {
    //   // console.log(`${movie.movieDetails[0]?.title} (${movie.movieDetails[0]?.director}, ${movie.movieDetails[0]?.year}): ${movie.count} reservations`);
    //   console.log(movie.movieDetails[0]?.PosterImg)
    // });
  })

});

module.exports = {
  // addmovie,
  addMovieInfo,
  // getImages,
  getMovieInformation,
  reservationDetails,
  getMovie,
  allMovie,
  addReview,
  getReview,
  GetTheaterMovies,
  deleteMovie,
  topReserved,
  editMovie
};
