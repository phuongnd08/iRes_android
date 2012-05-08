function PagesPicker(options, defaultPageIndex){
	var Settings = require("ui/common/Settings")
	if (!options){
		options = {}
	}
	
	var self = Ti.UI.createPicker(options);
	
	var picks = [];
	for (var i = 0, p = Settings.PAGE_NAMES; i < p.length; i++){
		picks.push(Ti.UI.createPickerRow({ title: p[i], value: i }))
	}
	
	self.add(picks);
	self.selectionIndicator = true;
	Ti.App.addEventListener("appInitialized", function(){
		self.setSelectedRow(0, defaultPageIndex, false)
	})
	return self;
}

module.exports = PagesPicker