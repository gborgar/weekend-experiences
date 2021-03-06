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
        .catch(error => next(error))
};

module.exports.doTravelBook = (req, res, next) => {
    const booking = req.body;
    console.log(booking);
    booking.owner = req.user.id;
    Travel.find({destination:booking.destination})
        .then(travels => {
            const validTravels = travels.filter(travel => !booking.travelChoices.includes(travel.id));
            booking.travel = validTravels[Math.floor(Math.random() * validTravels.length)];
            console.log("booking");
           console.log(booking);  
           Booking.create(booking)
            .then(booking => res.redirect(`/bookings/${booking.id}`))
            .catch(error => next(error))
        })
        .catch(error => next(error));
}


module.exports.detail = (req, res, next) => {
    // buscar el booking en base de datos por id (req.params.id)
    // Booking.findById(req.params.id).populate("travel").populate("owner")
    // render("reservations/detail", { booking })
    res.render("reservations/detail")
}
