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
  // const MatchID = req.body.id;
  // const options = {
  //   method: 'GET',
  //   url: 'https://live-line.p.rapidapi.com/matchSquads/3886',
  //   headers: {
  //     'X-RapidAPI-Key': 'ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18',
  //     'X-RapidAPI-Host': 'live-line.p.rapidapi.com'
  //   }
  // }

  // try {
  //   const response = await axios.request(options);
  //   res.json({ Data: response.data, message: "matchSquads finded" });
  // } catch (error) {
  //   console.error(error);
  // }

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
  const Type = req.body.Type || "International";
  const options = {
    method: 'GET',
    url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list',
    params: { matchState: MatchType },
    headers: {
      'X-RapidAPI-Key': 'ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18',
      'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    const filteredData = response.data.typeMatches.filter(match => match.matchType === Type);
    if (filteredData.length > 0) {
      return res.json({ Data: filteredData, message: ` ${Type} Matches found` });
    } else {
      res.json({ Data: [], message: `No  ${Type} Matches found` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
