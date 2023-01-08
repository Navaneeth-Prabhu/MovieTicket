import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function ReviewForm() {
    const movieInfo = useSelector(state=>state.movieInfo)
    const {movieInformation} = movieInfo

  const [message, setMessage] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const sessionCookie = Cookies.get();
//   const sessionDetails = JSON.parse(sessionCookie);
  const handleSubmit = event => {
   const movieId = movieInformation._id
    event.preventDefault();
    console.log(message,rating,movieInformation._id)
    axios.post('http://localhost:3001/reviews', { message, rating ,movieId})
  };

  return (
    <form className="flex flex-wrap flex-col bg-gray-800" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="review-message"
        label="Leave a review"
        multiline
        rows="4"
        className="gap-1"
        margin="normal"
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <Rating
        // className={classes.rating}
        name="review-rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Review
      </Button>
    </form>
  );
}
