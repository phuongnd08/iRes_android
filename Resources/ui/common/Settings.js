var Settings = {
	SERVER_ADDRESS: 'server.address',
	
	set: function(key, value){
		Titanium.App.Properties.setString(key, value);
	},
	
	get: function(key){
		return Titanium.App.Properties.getString(key);
	}
}

module.exports = Settings