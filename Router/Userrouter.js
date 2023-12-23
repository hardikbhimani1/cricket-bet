// In Userrouter.js
const express = require('express');
const Player = require('../Controller/Usercontroller');
const multer = require('multer');
const path = require('path')
const UserRouter = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/user");
    
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + Date.now() + extension);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      cb(null, true);
    },
  });

UserRouter.post("/sendOtp", Player.Register);
UserRouter.post("/verifyOTP", Player.VerifyOTP);
UserRouter.post("/update",Player.updateUser);

module.exports = UserRouter;
