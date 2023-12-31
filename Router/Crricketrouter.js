// In Userrouter.js
const express = require('express');
const Cricket = require('../Controller/CricketController');

const CricketRouter = express.Router();

CricketRouter.post("/match/live", Cricket.InternationalLiveMatch);
CricketRouter.post("/match/upcoming", Cricket.InternationalUpcomingMatchs);  
CricketRouter.post("/match/results", Cricket.InternationalResultsMatchs);  
CricketRouter.post("/match/MatchInfo", Cricket.MatchInfo);  
CricketRouter.post("/match/MatchSquads", Cricket.MatchSquads);  

//new LineUp
CricketRouter.get("/match", Cricket.LiveMatchs);  


module.exports = CricketRouter;
