const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const OTP = require("../Models/otp");
const { generateToken } = require("../utils/generatetoken");
const otpGenerator = require("otp-generator");
const { nodmail } = require("../utils/nodemailer");


// const handleErrors = (err) => {
//   let errors = { email: "", password: "" };

//   console.log(err);

//   if (err.code === 11000) {
//     errors.email = "Phone number is already registered";
//     return errors;
//   }

//   if (err.message.includes("Users validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//     });
//   }

//   return errors;
// };

// const signup = asyncHandler(async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log(req.body);
//     const user = {
//       email,
//     };
    
//     // const number = parseInt(phone)
//     const otp = await otpGenerator.generate(6, {
//       upperCaseAlphabets: false,
//       specialChars: false,
//       lowerCaseAlphabets: false,
//     });
//     console.log(otp);
//     const alreadyUser = await User.findOne({ email: email });
//     const alreadyOtp = await OTP.find({email:email})
//     if(!alreadyOtp){
//       console.log('otp not present')
//       if (alreadyUser) {
//         const userOtp = {
//           email: alreadyUser.email,
//           otp: otp,
//           date: Date.now(),
//         };
//         OTP(userOtp)
//           .save()
//           .then(async (response) => {
//             console.log(response);
//             const returnedOtp = await nodmail(alreadyUser.email, otp);
//             if (returnedOtp) {
//               // let token = await generateToken(alreadyUser._id);
//               // res.cookie("userToken", token).json({
//               //   status: true,
//               //   email: alreadyUser.email,
//               // });
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         User(user)
//           .save()
//           .then(async (response) => {
//             const userOtp = {
//               email: response.email,
//               otp: otp,
//               date: Date.now(),
//             };
//             const saveotp = await OTP(userOtp).save();
//             const returnedOtp = await nodmail(response.email, otp);
//             // console.log(response);
//             // let token = await generateToken(response._id);
//             // res.cookie("userToken", token).json(response.email);
//           });
//       }
//     }else{
//       console.log('otp is present')
//       OTP.findOneAndUpdate({email:email},{email:email,otp:otp,date:Date.now()})
//         .then(async (response) => {
//           console.log("responose",response);
//           const returnedOtp = await nodmail(email, otp);
          
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   } catch (error) {
//     const errors = handleErrors(err);
//     res.json({ errors, status: false });
//     // res.status(error.status).json(error.message)
//   }
// });
const signup = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = {
      email,
    };
    
    // const number = parseInt(phone)
    const otp = await otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    console.log(otp);
    
    // Check if the email is present in the User collection
    const alreadyUser = await User.findOne({ email: email });
    
    // Check if the email is present in the OTP collection
    const alreadyOtp = await OTP.findOne({ email: email });
    
    // If OTP is not present, create a new document in the OTP collection
    if (!alreadyOtp) {
      console.log('OTP not present');
      
      // If User is already present, update OTP
      if (alreadyUser) {
        const userOtp = {
          email: alreadyUser.email,
          otp: otp,
          date: Date.now(),
        };
        OTP(userOtp)
          .save()
          .then(async (response) => {
            console.log(response);
            const returnedOtp = await nodmail(alreadyUser.email, otp);
            if (returnedOtp) {
              // let token = await generateToken(alreadyUser._id);
              // res.cookie("userToken", token).json({
              //   status: true,
              //   email: alreadyUser.email,
              // });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } 
      // If User is not present, create a new document in the User collection
      else {
        User(user)
          .save()
          .then(async (response) => {
            const userOtp = {
              email: response.email,
              otp: otp,
              date: Date.now(),
            };
            const saveotp = await OTP(userOtp).save();
            const returnedOtp = await nodmail(response.email, otp);
            // console.log(response);
            // let token = await generateToken(response._id);
            // res.cookie("userToken", token).json(response.email);
          });
      }
    } 
    // If OTP is already present, update the OTP document
    else {
      console.log('OTP is present');
      OTP.findOneAndUpdate({ email: email }, { email: email, otp: otp, date: Date.now() })
        .then(async (response) => {
          console.log("Response",response);
          const returnedOtp = await nodmail(email, otp);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } catch (error) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
    // res.status(error.status).json(error.message)
  }
});


const otp = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { otp, email } = req.body;
    const findOtp = await OTP.findOne({ email: email.email, otp: Number(otp) });
    if (findOtp) {
      console.log(findOtp);
      let token = await generateToken(findOtp.email);
      res.cookie("userToken", token).json(findOtp.email);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  signup,
  otp,
};