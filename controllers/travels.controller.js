const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Travel = require("../models/travel.model");

module.exports.doCreate = (req, res, next) => {
  const travel = req.body;
  travel.image = req.file?.path;
  travel.keyWords = travel.keyWords
  console.log(req.body);

  Travel.create(travel)
    .then((travel) => {
      console.log( "Travel created", travel);
      res.redirect("/");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("travels/create", {
          contact: req.body,
          errors: error.errors,
        });
      } else {
        next(error);
      }
    });
};

module.exports.list = (req, res, next) => {
  Travel.find()
    .then((travels) => {
      res.render("misc/home", { 
        travels: travels
      })
    })
    .catch((error) => {
      console.log(error)
    })
};

module.exports.create = (req, res, next) => {
  res.render("travels/create")
};