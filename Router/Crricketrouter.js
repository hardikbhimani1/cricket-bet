// In Userrouter.js
const express = require('express');
const Cricket = require('../Controller/CricketController');

const CricketRouter = express.Router();

CricketRouter.get("/International", Cricket.InternationalMatch);
CricketRouter.post("/International", Cricket.InternationalMatch);


module.exports = CricketRouter;
