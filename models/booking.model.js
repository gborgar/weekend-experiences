const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const keywords = require('../data/keywords')

const bookingSchema = new Schema(
  { 
    owner: {
      ref: 'User',
      type: mongoose.Types.ObjectId
    },
    date: {
      type: String,
      required: 'Traveller date is required'
    },
    travelChoices: {
      type: [
        {
          ref: 'Travel',
          type: mongoose.Types.ObjectId
        }
      ]
    },
    travel: {
      ref: 'Travel',
      type: mongoose.Types.ObjectId
    },
    travellers: {
      type: [
        {
          name: {
            type: String,
            required: 'Traveller name is required'
          },
          lastname: {
            type: String,
            required: 'Traveller lastname is required'
          },
          birthday: {
            type: Date,
            required: 'Traveller nationality is required'
          },
          nationality: {
            type: String,
            required: 'Traveller birthday is required'
          },
          documentType: {
            type: String,
            required: 'Traveller birthday is required'
          },
          address: {
            type: {
              street: {
                type: String,
                required: 'Address street is required'
              },
              city: {
                type: String,
                required: 'Address city is required'
              },
              province: {
                type: String,
                required: 'Address province is required'
              },
              zipcode: {
                type: String,
                required: 'Address zipcode is required'
              },
              country: {
                type: String,
                required: 'Address country is required'
              },
            },
            
          },
          email: {
            type: String,
            required: 'Traveller email is required'
          },
          phone: {
            type: Number,
            required: 'Traveller phone is required'
          },
        }
      ]
    }
  },
  { timestamp: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;