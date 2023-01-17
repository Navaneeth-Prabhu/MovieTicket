const asyncHandler = require("express-async-handler");
const { Types } = require("mongoose");
const Reservation = require("../Models/ReservationModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const generateQR = require("../../utils/generateQR");

const reservation = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { paymentId, total } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR",
      description: "Movie+",
      payment_method: paymentId,
      confirm: true,
    });
    const data = await Reservation(req.body).save();
    // const qrcode = await generateQR(
    //   "http//:localhost:3000/reservation/" + data.id
    // );
    res.json({ status: "payment successfull", data, qrcode });
  } catch (error) {
    console.log(error);
  }
});

const getSeatsInformation = asyncHandler(async (req, res) => {
  try {
      const { date, movieId, theaterId, time } = req.body;
      console.log("helo",date, movieId, theaterId, time);
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
    console.log(data);
    let seat = [];
    if(data.length === 0){
      res.json({seat:false})
    }else{

      if(data[0].seats.length != 0){
  
        for (let i = 0; i < data[0].seats.length; i++) {
          for (let j = 0; j < data[0].seats[i].length; j++) {
            seat.push(data[0].seats[i][j]);
          }
        }
      }
    }
    res.json(seat);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  reservation,
  getSeatsInformation,
};