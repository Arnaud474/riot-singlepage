var express = require("express"),
	_ = require("underscore"),
	i18n = require("i18n");

class i18nHelper{
	//Empty constructor
	constructor(){
		
	}

	/**
	*	Init wrapper function for i18n
	*	languages - Array of languages for the app
	*	def - Default language on the app
	*/
	init(app,languages, def){

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
		app.use(i18n.init);
	}

	/*
	*	Returns a Regex for the path including all possbile locales from i18n
	*
	*	Having en and fr as locale will allow localhost:8888/fr/ and localhost:8888/en/ 
	*/
	i18nRoute(path){

		var locales = i18n.getLocales()
		
		if(path != "*")
		{
			if(path === '')
				path = "/"

			path.replace('/', '\/');

			var route = '^\/(';

			for(var i = 0; i < locales.length; i++)
			{
				route = route.concat(locales[i]);

				if(i < locales.length-1)
					route = route.concat('|');
			}

			route = route.concat(')' + path + '{0,1}$');
		}
		else
		{
			var route = '\/(';

			for(var i = 0; i < locales.length; i++)
			{
				route = route.concat(locales[i]);

				if(i < locales.length-1)
					route = route.concat('|');
			}

			route = route.concat(')\/{0,1}');
		}

		route = new RegExp(route, "i");

		return route;
	}

	getLocales(){
		return i18n.getLocales()
	}

	getCurrentLocale(){
		return i18n.getLocale();
	}

	setLocale(locale){
		i18n.setLocale(locale);
	}
}

module.exports = new i18nHelper();
