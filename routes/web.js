//ROUTER IMPORT
var express = require("express");
var router = express.Router();
var web = require("../controllers/web")



//GLOBAL ROUTE FOR LOCALE
router.get("*", web.index);


module.exports = router;