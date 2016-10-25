//ROUTER IMPORT
var express = require("express");
var router = express.Router();
var admin = require("../controllers/admin")

router.all('/admin', admin.index);

module.exports = router;