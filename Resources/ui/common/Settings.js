var Settings = {
	SERVER_ADDRESS: 'server.address',
	DEFAULT_PAGE_INDEX: 'default.page.index',
	PAGE_NAMES: ['Waiter', 'Chef', 'Manager'],
	PAGES: ['/waiter', '/chef', '/manager'],
	
	set: function(key, value){
		Titanium.App.Properties.setString(key, value);
	},
	
	get: function(key){
		return Titanium.App.Properties.getString(key);
	},
	
	setServerAddress: function(value){
		this.set(this.SERVER_ADDRESS, value)
	},
	
	getServerAddress: function(){
		return this.get(this.SERVER_ADDRESS) || "127.0.0.1"
	},
	
	setDefaultPageIndex: function(value){
		this.set(this.DEFAULT_PAGE_INDEX, value)
	},
	
	getDefaultPageIndex: function(){
		return this.get(this.DEFAULT_PAGE_INDEX) || 0
	},
	
	getDefaultPage: function(){
		return this.PAGES[this.getDefaultPageIndex()];
	}
}

module.exports = Settings