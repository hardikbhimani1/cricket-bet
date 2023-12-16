// In Userrouter.js
const express = require('express');
const Player = require('../Controller/Usercontroller');

const UserRouter = express.Router();

UserRouter.post("/sendOtp", Player.Register);
UserRouter.post("/get", Player.getdata);

module.exports = UserRouter;
