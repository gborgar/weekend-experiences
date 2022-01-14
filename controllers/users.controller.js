const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Event = require("../models/event/.model");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
module.exports.create = (req, res, next) => {
  res.render("users/create");
};

module.exports.doCreate = (req, res, next) => {
  //req.body.author = req.user.id;

  Contact.create(req.body)
    .then(() => res.redirect("/users"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("users/create", {
          contact: req.body,
          errors: error.errors,
        });
      } else {
        next(error);
      }
    });
};

module.exports.edit = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.render("users/edit", { user });
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch((error) => next(error));
};

module.exports.doEdit = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then((user) => {
      if (user) {
        res.redirect(`/users/${user.id}`);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        const user = req.body;
        user.id = req.params.id;

        res.render("users/edit", {
          user,
          errors: error.errors,
        });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        res.redirect(`/users`);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch((error) => next(error));
};










































































































































































































































































































































































































































ç´