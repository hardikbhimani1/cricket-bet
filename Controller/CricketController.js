const axios = require('axios');
// Assuming the correct library and initialization
const cricLive = require('cric-live');

// Initialize the library if required
// cricLive.init({ /* initialization parameters */ });

// Make the API call to get live scores
cricLive.getLiveScore((error, scores) => {
  if (error) {
    console.error('Error fetching live scores:', error);
  } else {
    console.log('Live scores:', scores);
  }
});


// exports.InternationalMatch = async (req, res) => {
//     const options = {
//         method: 'GET',
//         url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
//         headers: {
//             'X-RapidAPI-Key': 'ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18',
//             'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
//         },
//     };
//     try {
//         const response = await axios.request(options);
//         const International = response?.data?.typeMatches
//         const NewInternational = International.map((Data)=>{
//             if(Data.matchType == "International"){
//                 return Data
//             }
//         })
//         const responseData = {
//             status: response.status,
//             statusText: response.statusText,
//             data: NewInternational,
//         };

//         res.json(responseData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

exports.InternationalMatch = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://live-cricket-score-upcoming-matches.p.rapidapi.com/static-content/10s/cricket-liupre.json',
        headers: {
          'X-RapidAPI-Key': 'ce65ad9c04mshb0533694c288bc3p1a7f8ejsn70acf14abe18',
          'X-RapidAPI-Host': 'live-cricket-score-upcoming-matches.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data)
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
};