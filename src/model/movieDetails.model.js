const mongoose = require("mongoose");

const movieDetails = new mongoose.Schema(
  {
    id: { type: String },
    movieName: {
        type: String
    },
    poster:{
        type: String
    },
    desc:{
        type: String
    },
    rating:{
        type: Number
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie_Detail_Schema", movieDetails);
