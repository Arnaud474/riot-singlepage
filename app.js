var express = require("express");

//Application class
var Application = function(){

	var config = require("./lib/config").getEnv("dev");

	//CONSTANTS
	this.HOST = config.HOST;
	this.PORT = config.PORT;

	//VARIABLES
	this.app;
}

//Init for application routes (URL)
Application.prototype.initRoutes = function(){

	//Routes for admin (Content Management System)
	this.app.use(require('./routes/admin'));

	//Routes for API
	this.app.use(require('./routes/api'))

	//Main routes for public website
	this.app.use(require('./routes/web'));

}

//Init for Modules and Assets
Application.prototype.initRessources = function(){

	//Node modules init

	//Assets
	this.app.use('/public', express.static(__dirname + '/assets/public'));
	this.app.use('/riot', express.static(__dirname + '/node_modules/riot'))
}

//Main init of the web application
Application.prototype.initApp = function (){

	var self = this;

	this.app = express();

	//Init of all app routes
	this.initRessources();
	this.initRoutes();

	//Starting express app
	this.app.listen(this.PORT, this.HOST, function(){
		console.log("App started on " + self.HOST + ":" + self.PORT);
	});

}



var app = new Application();
app.initApp();

