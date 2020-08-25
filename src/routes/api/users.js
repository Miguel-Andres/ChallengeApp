var express = require('express');
var router = express.Router();
var usercontroller = require("../../controllers/usersController")


/* GET home page. */
router.get('/', usercontroller.mostrar);


module.exports = router;
