function Localizer(){

	this.data;
	this.locales = ['fr','en'];
}

Localizer.prototype.setLocale = function(locale){

	//Most Likely should be server sided, or atleast gather languages from server on init
	var index = this.locales.indexOf(getCookies().locale);

	var next = (index == this.locales.length-1) ? 0 : (index + 1);

	locale = this.locales[next];

	setCookie("locale", locale);
}


/**
*	Fetches localization JSON from server and translates current view
*/
Localizer.prototype.getTranslation = function(locale, callback){

	var self = this;

	//console.log(locale)

	//Get locale from param or cookie or defaults to en
	if(locale)
		locale = locale;
	else if( getCookies() && getCookies().locale)
		locale = this.currentLocale()
	else
	{
		setCookie("locale", "en")
		locale = "en";
	}


	$.getJSON("/api/localizer/" + locale, function(data){

		self.data = data;
		callback();
		//self.localizeView("body");
		
	});

}

/*
*	Localize current page with data-lzr-id="some-tag"
*/
Localizer.prototype.localizeView = function(dom){

	this.localizeNode(dom);

}

Localizer.prototype.localizeNode = function(domNode){
	
  	domNode = $(domNode);

	//Check if we have child elements
	if(domNode.children().length > 0)
	{	
		//Check children one by one
		for(var i = 0; i < domNode.children().length; i++)
		{
			this.localizeNode(domNode.children()[i]);
		}
	}

	if(!domNode.is("script") && !domNode.is("body"))
	{
		//console.log(domNode);

		if(domNode.data("lzr-id"))
			domNode.text(this.findWord(domNode.data("lzr-id"), this.data));
	}
}

Localizer.prototype.findWord = function(string, obj){

	var arr = string.split(".");

	if(arr.length > 1)
	{
		for(var i = 0; i < arr.length; i++)
		{
			obj = obj[arr[i]];
		}

		return obj;
	}
	else
		return obj[string];
}

Localizer.prototype.currentLocale = function(){
	return getCookies().locale;
}


function getCookies(){

		var cookieString = document.cookie;

		if(cookieString.length == 0)
			return false;

		var cookieArray = cookieString.split(";");

		var cookieObj = {};

		for(var i = 0; i < cookieArray.length; i++)
		{

			var temp = cookieArray[i].split("=");
			var string = temp[0].replace(/\s+/g, "")

			cookieObj[string] = temp[1];
		}

		//console.log(cookieObj)

		return cookieObj;
	}

function setCookie(cookieName, value){

	document.cookie = cookieName + "=" + value + ";";
			
}
