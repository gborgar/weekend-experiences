const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const keywords = require('../data/keywords')

const travelSchema = new Schema(
  {
    destination: {
      type: String,
      enum: ["national","europe"],
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
      type: String,
      enum: ["coche", "avión"],
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
      type: Number
    },
    keyWords: {
      type: [String],
      required: true,
      enum: keywords
    },
    hotel: {
      type: {
        name: {
          type: String,
          required: 'Hotel name is required'
        },
        description: {
          type: String,
          required: 'Hotel description is required'
        }, 
        image: {
          type: String,
          required: 'Hotel image is required'
        }
      }
    }
  },
  { timestamp: true }
);

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;