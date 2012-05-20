function SettingsWindow() {
	//create module instance
	var self = Ti.UI.createWindow({
		title : L("settings"),
		layout : 'vertical'
	});

	var Settings = require("ui/common/Settings")
	var PagesPicker = require("ui/common/PagesPicker")
	var defaultPageIndex = Settings.getDefaultPageIndex();

	var serverLabel = Ti.UI.createLabel({
		text : L("server_address"),
		left : 10,
		top : 10
	})
	var serverField = Ti.UI.createTextField({
		left : 10,
		top : 10,
		width : 150,
		height : 'auto',
		value : Settings.getServerAddress(),
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	})

	var pageLabel = Ti.UI.createLabel({
		text : L("default_page"),
		left : 10,
		top : 10,
	})

	var pagesPicker = PagesPicker({
		top : 10,
		left : 10
	}, defaultPageIndex);

	pagesPicker.addEventListener('change', function(e) {
		defaultPageIndex = e.rowIndex;
	})
	var applyBtn = Ti.UI.createButton({
		left : 10,
		top : 10,
		title : L("apply_settings")
	})

	applyBtn.addEventListener('click', function() {
		Settings.setServerAddress(serverField.value)
		Settings.setDefaultPageIndex(defaultPageIndex)
		Ti.App.fireEvent("appSettingsChanged")
	})

	self.add(serverLabel)
	self.add(serverField)
	self.add(pageLabel)
	self.add(pagesPicker)
	self.add(applyBtn)
	return self
};

module.exports = SettingsWindow;
