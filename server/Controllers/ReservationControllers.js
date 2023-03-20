const asyncHandler = require("express-async-handler");
const { Types } = require("mongoose");
const Reservation = require("../Models/ReservationModel");
const Movie = require("../Models/MovieModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const generateQR = require("../../server/utils/generateQr");


const reservation = asyncHandler(async (req, res) => {
 
  try {
    const { paymentId, total } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR",
      description: "Movie+",
      payment_method: paymentId,
      confirm: true,
    });
    const data = await Reservation(req.body).save();
    const qrcode = await generateQR(
      "http//:localhost:3000/reservation/" + data._id
    );
    // console.log('payment successfull',qrcode)
    await Reservation.findByIdAndUpdate(data._id,{$set:{qrcode:qrcode}})
    res.json({ status: "payment successfull", data, qrcode });
  } catch (error) {

    console.log("paymenterror",error);
  }
});
const theaterreservation = asyncHandler(async (req, res) => {
 
  try {
   
    const data = await Reservation(req.body).save();
    res.json({ status: "payment successfull", data });
  } catch (error) {

    console.log("paymenterror",error);
  }
});

const reservationDetails = asyncHandler(async(req,res)=>{
  let id = req.params.id
  try {
    const reservations = await Reservation.find({ cinemaId:id });
    res.status(200).json(reservations);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting total reservations by cinema ID');
  }
})

const reseravtionHistory = asyncHandler(async(req,res)=>{
  let cinemaId = req.params.id
  let movieId = req.params.movieId
  console.log(movieId,cinemaId)
    try {
      const reservations = await Reservation.find({cinemaId,movieId}).sort({showDate:-1});
      res.status(200).json(reservations);
      
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve reservations.');
    }
 
})


const getSeatsInformation = asyncHandler(async (req, res) => {
  try {
    const { date, movieId, theaterId, time } = req.body;
    console.log("in get seat infromation", date, movieId, theaterId, time);
    const data = await Reservation.aggregate([
      {
        $match: {
          $and: [
            {
              showDate: date,
            },
            {
              movieId: Types.ObjectId(movieId),
            },
            {
              cinemaId: Types.ObjectId(theaterId),
            },
            {
              startAt: time,
            },
          ],
        },
      },
      {
        $group: {
          _id: null,
          seats: {
            $push: "$seats",
          },
        },
      },
    ]);

    let seat = [];
    if (data.length === 0) {
      res.json({ seat: false });
    } else {
      if (data[0].seats.length != 0) {
        for (let i = 0; i < data[0].seats.length; i++) {
          for (let j = 0; j < data[0].seats[i].length; j++) {
            seat.push(data[0].seats[i][j]);
          }
        }
      }
    }
    console.log(data);
    res.json(seat);
  } catch (error) {
    console.log(error);
  }
});

const getUserHistory = asyncHandler(async(req,res)=>{
  try {
    let id = req.params.id    
    Reservation.find({userId:id})
    .populate('movieId').sort({bookedDate:-1})
    .exec((err, reservations) => {
      if (err) {
        console.log(err);
      } else {
        
        res.status(200).json(reservations)
      }
    });
  } catch (error) {
    
  }
})

module.exports = {
  reservation,
  getSeatsInformation,
  getUserHistory,
  theaterreservation,
  reservationDetails,
  reseravtionHistory
  
};
