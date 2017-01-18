


function Router(){
	const DEFAULT = "home";
}

Router.prototype.goTo = function(view) {
	
	if(view){

		console.log("Changing to view : " + view);

		//Unmount tag
		currentView.unmount(true);

		//Mount tag
		currentView = riot.mount("#main", view)[0];

		window.history.pushState("", "", '/' + view);

		//View is not defined
		if(!currentView)
		{
			currentView = riot.mount(DEFAULT, view)[0];
		}
	}

};