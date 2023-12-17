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
      if(!email){
        return res.status(500).json({ error: "Ple Enter Email" });
      }
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
exports.VerifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }
    const user = await Player.findOne({ email:email});
    console.log(user,'useruser')
    if (!user) {
      return res.status(404).json({ error: "Invalid  Email" });
    }
    if(user.otp == otp){
      return res.json({ message: "OTP verified successfully" });
    }else{
      return res.status(404).json({ error: "Invalid OTP " });
    }
  } catch (error) {
    res.status(500).json({ error: "OTP verification failed" });
  }
};
  
exports.updateUser = async (req, res) => {
  try {
    const { firstname, lastname,email } = req.body;
    const imageUrls = req.files["profilepic"] ? req.files["profilepic"][0] : null;
    const updateData = {
      firstname,
      lastname,
    };
    if (imageUrls) {
      updateData.profilepic = imageUrls;
    }
    const blog = await Player.findOne({email});
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    Object.assign(blog, updateData);
    await blog.save();
    res.json({ message: "Player updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating Player" });
  }
};