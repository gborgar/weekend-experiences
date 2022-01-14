const mongoose = require("mongoose");
const createError = require("http-errors");
const User = require("../models/user.model");
const { sendVerificationEmail } = require("../config/mailer.config");

module.exports.register = (req, res, next) => {
  res.render("auth/register");
};

module.exports.doRegister = (req, res, next) => {
  console.log("file: ", req.file);
  console.log("body: ", req.body);

  function renderWithErrors(errors) {
    res.render("auth/register", {
      errors: errors,
      user: req.body,
    });
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        req.body.avatar = req.file.path;

        return User.create(req.body).then((user) => {
          sendVerificationEmail(user);

          res.redirect("/login");
        });
      } else {
        renderWithErrors({ email: "email already exists" });
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
};

module.exports.login = (req, res, next) => {
  res.render("auth/login");
};

module.exports.verify = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { verified: true })
    .then((user) => {
      res.redirect("/login");
    })
    .catch(next);
};

module.exports.doLogin = (req, res, next) => {
  function renderWithErrors() {
    res.render("auth/login", {
      user: req.body,
      errors: { password: "email or password incorrect" },
    });
  }

  const { email, password } = req.body;

  User.findOne({ email, verified: true })
    .then((user) => {
      if (!user) {
        renderWithErrors();
      } else {
        return user.checkPassword(password).then((match) => {
          if (!match) {
            renderWithErrors();
          } else {
            req.session.userId = user.id;
            res.redirect("/users");
          }
        });
      }
    })
    .catch((error) => next(error));
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};

