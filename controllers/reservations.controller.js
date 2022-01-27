const Travel = require("../models/travel.model");

module.exports.doTravelFind = (req, res, next) => {
    
    const finder = req.query;
    console.log(finder)
    Travel.find(finder)
        .then(travels => {
            res.render("reservations/travel-finder", {travels}) 
            const destination = [""];
            const result = destination.filter(travels => travels.destination);
            console.log(result); 
        })
        .catch(error => next(error))
};
