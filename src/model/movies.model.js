const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    id: { type: Number },
    movieName: {
        type: String,
        required: [true, "Movie Name required"]
    },
    poster:{
        type: String,
        required: [true, "Poster required"]
    },
    desc:{
        type: String,
        required: [true, "Description required"]
    },
    rating:{
        type: Number,
        required: [true, "ratings required"]
    },
    store:{
        type: Boolean,
        default: false
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie_Schema", movieSchema);
