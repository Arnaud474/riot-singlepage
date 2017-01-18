var fs = require('fs');

module.exports = {

	localizer: function(req, res){

		var locale = req.params.locale;

		var traduction = JSON.parse(fs.readFileSync('assets/private/data/localization/'+ locale + '.json', 'utf8'));


		res.json(traduction);
	}
}