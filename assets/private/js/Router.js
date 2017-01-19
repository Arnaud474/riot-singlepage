


function Router(){
	this.DEFAULT = "home";
}

/**
*	Sets the initial view when loading or reloading page
*/
Router.prototype.init = function(){

	var view = cookieParser.getCookie("view");

	if(view)
	{
		currentView = riot.mount("#main", view)[0];
	}
	else{

		view = this.DEFAULT;

		currentView = riot.mount("#main", view)[0];
	}

	window.history.pushState("", "", '/' + view);

	cookieParser.setCookie("view", view);
}


/**
*	Switches the current View
*/
Router.prototype.goTo = function(view) {
	
	if(view){

		console.log("Changing to view : " + view);

		//Unmount tag
		currentView.unmount(true);

		//Mount tag
		currentView = riot.mount("#main", view)[0];

		window.history.pushState("", "", '/' + view);

		cookieParser.setCookie("view", view);
	}

};