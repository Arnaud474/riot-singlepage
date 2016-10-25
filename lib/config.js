module.exports = {
	getEnv: function(envName){	
		switch(envName){
			case "dev":
				return {
					HOST: "localhost",
					PORT: 8888,
					DB: "mongodb://localhost/db_name"
				}
			break;
			case "prod":
				return {
					HOST: "",
					PORT: 0,
					DB: ""
				}
			break;
		}
	}
}