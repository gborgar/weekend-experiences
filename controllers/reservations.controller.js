const Travel = require("../models/travel.model");

module.exports.doTravelFind = (req, res, next) => {
    
    const finder = req.query;
    console.log(finder)
    Travel.find()
        .then(travels => {
            res.render("reservations/travel-finder", {travels})   
        })
        .catch(error => next(error))
};

