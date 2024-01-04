const axios = require("axios");

exports.InternationalLiveMatch = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://live-line.p.rapidapi.com/liveMatches",
    headers: {
      "X-RapidAPI-Key": "ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18",
      "X-RapidAPI-Host": "live-line.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    res.json({ Data: response.data, message: "Live Match finded" });
  } catch (error) {
    console.error(error);
  }
};

exports.InternationalUpcomingMatchs = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://live-line.p.rapidapi.com/upcomingMatches",
    headers: {
      "X-RapidAPI-Key": "ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18",
      "X-RapidAPI-Host": "live-line.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    res.json({
      Data: response.data,
      message: "Upcoming Match finded",
    });
  } catch (error) {
    console.error(error);
  }
};

exports.InternationalResultsMatchs = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://live-line.p.rapidapi.com/recentMatches",
    headers: {
      "X-RapidAPI-Key": "ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18",
      "X-RapidAPI-Host": "live-line.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    res.json({ Data: response.data, message: "results Match finded" });
  } catch (error) {
    console.error(error);
  }
};

exports.MatchInfo = async (req, res) => {
  const MatchID = req.body.id;
  const options = {
    method: "GET",
    url: `https://live-line.p.rapidapi.com/matchInfo/${MatchID}`,
    headers: {
      "X-RapidAPI-Key": "ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18",
      "X-RapidAPI-Host": "live-line.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json({ Data: response.data, message: "MatchInfo finded" });
  } catch (error) {
    console.error(error);
  }
};

exports.MatchSquads = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://live-line.p.rapidapi.com/matchSquads/2799",
    headers: {
      "X-RapidAPI-Key": "ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18",
      "X-RapidAPI-Host": "live-line.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


exports.LiveMatchs = async (req, res) => {
  const MatchType = req.body.MatchType;
  const Type = req.body.Type;
  const options = {
    method: 'GET',
    url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list',
    params: { matchState: MatchType },
    headers: {
      'X-RapidAPI-Key': 'd59abf8561msh656c16ddb1538ffp1ef55ejsnf90ac1487233',
      'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
    },
  };
  try {
    const response = await axios.request(options);
    const filteredData = response.data.typeMatches.filter(match => match.matchType === Type);
    if (filteredData.length > 0) {
      const { matchType, seriesAdWrapper } = filteredData[0];
      return res.send(seriesAdWrapper);
    } else {
      res.json({ Data: []});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.GetTeams = async (req, res) => {
  const matchId = req.body.matchId
  const teamId = req.body.teamId
  const options = {
    method: 'GET',
    url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-team',
    params: {
      matchId: matchId,
      teamId: teamId
    },
    headers: {
      'X-RapidAPI-Key': 'd59abf8561msh656c16ddb1538ffp1ef55ejsnf90ac1487233',
      'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    // if(response?.data?.length > 0){
      return res.json({ Data: response?.data, message: `Player found` });
    // }else{
    //   res.json({ Data: [], message: `Not Player found` });
    // }
    
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

