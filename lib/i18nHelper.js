var express = require("express"),
	_ = require("underscore"),
	i18n = require("i18n");

class i18nHelper{
	//Empty constructor
	constructor(app){
		this.app = app;
	}

	/**
	*	Init wrapper function for i18n
	*	languages - Array of languages for the app
	*	def - Default language on the app
	*/
	init(languages, def){

		var self = this;

		//Validation for languages passed in params
		languages = languages && languages.length ? languages : ['en'];
		def = languages && languages.length && def && _.indexOf(languages, def) ? def : _.first(languages);

		//Configure i18n
		i18n.configure({
			locales: languages,
			defaultLocale: def,
			cookie: 'locale',
			directory: './locales',
			autoReload: true,
			objectNotation: true
		})
		
		//Use i18n
		this.app.use(i18n.init);
	}

}

module.exports = function(app){
	return new i18nHelper(app);
}
