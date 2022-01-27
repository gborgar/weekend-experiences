const Travel = require("../models/travel.model");

module.exports.doTravelFind = (req, res, next) => {
    
    const finder = req.query;
    console.log('req.query',finder)
    Travel.find({destination:finder.destination})
        .then(travels => {
            res.render("reservations/travel-finder", {travels}) 
        })
        .catch(error => next(error))
};
