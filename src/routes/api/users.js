var express = require('express');
var router = express.Router();
var usercontroller = require("../../controllers/usersController")


/* GET api/users/ */
router.get('/', usercontroller.mostrar);


router.post("/", usercontroller.crear)


module.exports = router;
