//ROUTER IMPORT
var express = require("express");
var router = express.Router();
var web = require("../controllers/web")
var i18nH = require("../lib/i18nHelper");


//GLOBAL ROUTE FOR LOCALE
router.get(i18nH.i18nRoute('*'), web.locale);
router.get(i18nH.i18nRoute('/'), web.index);


module.exports = router;