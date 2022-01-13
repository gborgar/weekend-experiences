const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const users = require("../controllers/users.controller");
const travels = require("../controllers/travels.controller");
const auth = require("../controllers/auth.controller");
//const secure = require("../middlewares/secure.mid");


router.get("/", misc.home);

router.post("/travels", travels.doCreate)
router.get("/travels", travels.allTravels)





module.exports = router;