const express = require('express');
const Router = require('./Router/Userrouter')
const app = express();
const db = require('./Database/DB')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/player',Router)

const PORT = process.env.PORT || 5151;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
