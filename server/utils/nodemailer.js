const nodemailer = require("nodemailer");
require('dotenv').config()

const nodmail = async (email, otp) => {
  return new Promise((resolve, reject) => {

    try {
      let transporter = nodemailer.createTransport({
        service: "mail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: 'navaneethprabhu15@gmail.com',
          pass: 'ksnluyhlncufqxdw',
        },

        logger: true,
        debug: true,
      });

      transporter.sendMail(
        {
          from: '"Fred Foo 👻" navaneethprabhu15@gmail.com',
          to: email,
          subject: "Hello ✔",
          text: otp,
          html: `<b>Your OTP for login is ${otp}</b>`,
        },
        (error) => {
          if (error) {
            reject(error)
          } else {
       
            resolve("message sent successfully")
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = {
  nodmail,
};