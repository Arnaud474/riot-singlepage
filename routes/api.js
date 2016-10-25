//ROUTER IMPORT
var express = require("express");
var router = express.Router();
var api = require("../controllers/api")

router.get('/api/test', api.test);

module.exports = router;