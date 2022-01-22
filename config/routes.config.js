const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const travels = require("../controllers/travels.controller");
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");
const multer = require("../config/multer.config");


router.get("/", misc.home);

router.post("/travels", secure.isAuthenticated, secure.isAdmin, multer.single("image"), travels.doCreate);
router.get("/travels/create", secure.isAuthenticated, secure.isAdmin, travels.create);
router.get("/travels/list", travels.list);


router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/users/:id/verify", auth.verify);
router.get("/logout", auth.logout);




module.exports = router;