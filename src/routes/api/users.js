var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function( req, res, next) {
  res.send("hola soy la api de los usuarios");
});

module.exports = router;
