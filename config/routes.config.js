const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const travels = require("../controllers/travels.controller");
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");


router.get("/", misc.home);

router.post("/travels", travels.doCreate);
router.get("/travels", travels.allTravels);

router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/users/:id/verify", auth.verify);
router.get("/profile", auth.doLogin);
router.get("/logout", auth.logout);




module.exports = router;