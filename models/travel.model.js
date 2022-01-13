const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const keywords = require('../data/keywords')

const travelSchema = new Schema(
  {
    national: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true 
    },
    location: {
      type: String,
      required: true
    },
    tripMode: {
      type: [String],
      enum: ["car", "ship", "plane"],
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3
    },
    rating: {
      type: Number,
      required: true
    },
    keyWords: {
      type: [String],
      required: true,
      enum: keywords
    },
  },
  { timestamp: true }
);

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;