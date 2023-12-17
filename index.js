const express = require('express');
const Router = require('./Router/Userrouter')
const CricketRouter = require('./Router/Crricketrouter')
const dotenv = require('dotenv').config()
const app = express();
const db = require('./Database/DB')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/player',Router)
app.use('/cricket',CricketRouter)

const PORT = process.env.PORT || 5151;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
