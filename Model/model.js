const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  otp: {
    type: Number,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  profilepic: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
