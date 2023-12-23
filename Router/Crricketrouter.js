// In Userrouter.js
const express = require('express');
const Cricket = require('../Controller/CricketController');

const CricketRouter = express.Router();

CricketRouter.get("/match/live", Cricket.InternationalLiveMatch);
CricketRouter.get("/match/upcoming", Cricket.InternationalUpcomingMatchs);  
CricketRouter.get("/match/results", Cricket.InternationalResultsMatchs);  
CricketRouter.get("/match/MatchInfo", Cricket.MatchInfo);  
CricketRouter.get("/match/MatchSquads", Cricket.MatchSquads);  


module.exports = CricketRouter;
