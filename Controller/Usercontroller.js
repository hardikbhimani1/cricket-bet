const Player = require("../Model/model");
const nodemailer = require('nodemailer');

function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

exports.Register = async (req, res) => {
    try {
      const email = req.body.email 
      console.log(email,'sadsdasdas')
      let existingUser = await Player.findOne({ email });
      if (existingUser) {
        const otp = generateOTP();
        console.log(email, 'existingUser');

        existingUser.otp = otp;
        await existingUser.save();
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
        });
  
        const mailOptions = {
          from: process.env.MAIL_FROM,
          to: existingUser.email,
          subject: "OTP Verification",
          html: `<p>Your OTP for registration is: ${otp}</p>`,
        };
  
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ error: "Failed to send OTP via email" });
          }
          res.json({ MSG: "sendOTP", otp: otp });
        });
  
        res.json({ message: "Admin updated successfully", Player: existingUser });
  
      } else {
        const otp = generateOTP();
        const newPlayer = new Player({
          email,
          otp,
        });
  
        await newPlayer.save();
  
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
        });
  
        const mailOptions = {
          from: process.env.MAIL_FROM,
          to: email,
          subject: "OTP Verification",
          html: `<p>Your OTP for registration is: ${otp}</p>`,
        };
  
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ error: "Failed to send OTP via email" });
          }
          res.json({ MSG: "sendOTP", otp: otp });
        });
  
        res.json({ message: "Registration successful" });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "Registration failed" });
    }
  };
exports.getdata = async (req, res) => {
const email = req.body.email
console.log(email,'qwfdsads')
};
  
