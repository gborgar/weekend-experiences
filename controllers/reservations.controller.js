const Travel = require("../models/travel.model");
const Booking = require("../models/booking.model");
const countries = require('../data/countries');
const documentTypes = require('../data/documentTypes');

module.exports.doTravelFind = (req, res, next) => {
    
    const finder = req.query;
    console.log('req.query',finder)
    Travel.find({destination:finder.destination})
        .then(travels => {
            res.render("reservations/travel-finder", {travels, finder, countries, documentTypes})
        })
        .catch(error => next(error));
};

module.exports.doTravelBook = (req, res, next) => {
    const booking = req.body;
    booking.owner = req.user.id;
    console.log(booking);
    booking.travel = booking.travelChoices[Math.floor(Math.random() * booking.travelChoices.length)];
    console.log(booking);
        Booking.create(booking)
        .then(booking => res.redirect(`../bookings/${booking.id}`))
        .catch(error => next(error));
}

module.exports.detail = (req, res, next) => {
    Booking.findById(req.params.id).populate("travel").populate("owner")
    .then(booking => {
        if (booking) {
            return Travel.findById(booking.travel).then((travel) =>
                res.render("reservations/detail", { booking, travel }));
        } else {
            next(createError(404, "Travel not found"));
        }
    })
    .catch(error => next(error));
}
