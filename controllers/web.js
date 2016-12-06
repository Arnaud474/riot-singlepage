var i18nH = require("../lib/i18nHelper");

module.exports = {

	locale: function(req, res, next){

		//Getting locale from URL
		var urlLocale = req.url.split('/')[1];

		//Checking if the locale is defined
		/*if(req.cookies.locale)
		{
			
			res.cookie('locale', urlLocale, { maxAge: 900000, httpOnly: true });
			res.setLocale(urlLocale);
			
		}
		else{
			res.cookie('locale', urlLocale, { maxAge: 900000, httpOnly: true });
			res.setLocale(urlLocale);
		}*/

		res.cookie('locale', urlLocale, { maxAge: 900000, httpOnly: true });
		res.setLocale(urlLocale);

		next();
	},

	index: function(req, res){
		res.render('web/index.pug');
	}
}