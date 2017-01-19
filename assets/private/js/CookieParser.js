function CookieParser(){

}

/**
*	Sets one cookie
*/
CookieParser.prototype.setCookie = function(cookieName, value) {
	document.cookie = cookieName + "=" + value + ";";
};

/*
*	Gets all cookies
*/
CookieParser.prototype.getCookies = function(){

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

	return cookieObj;
}


/*
*	Gets one cookie
*/
CookieParser.prototype.getCookie = function(cookieName){
	var cookieString = document.cookie;

	if(cookieString.length == 0)
		return false;

	var cookieArray = cookieString.split(";");

	for(var i = 0; i < cookieArray.length; i++)
	{

		var temp = cookieArray[i].split("=");
		var string = temp[0].replace(/\s+/g, "")

		if(string == cookieName)
			return temp[1];
	}

	return undefined;
}