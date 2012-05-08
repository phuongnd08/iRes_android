function SettingsWindow() {
  //create module instance
  var self = Ti.UI.createWindow({
    title: L("settings")
  });
  
  var Settings = require("ui/common/Settings")
  var PagesPicker = require("ui/common/PagesPicker")
  var defaultPageIndex = Settings.getDefaultPageIndex();

    var serverLabel = Ti.UI.createLabel({
      text: "Server Address",
        left: 10,
        top: 10
    })
  var serverField = Ti.UI.createTextField({
    left: 10,
      top: 30,
      width: 150,
      height: 30,
      value: Settings.getServerAddress(),
      borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
  })
  
  var pageLabel = Ti.UI.createLabel({
  	text: "Default page",
  	left: 10,
  	top: 70,
  })
  
  self.add(pageLabel)
  
  var pagesPicker = PagesPicker({
  	top: 90,
  	left: 10
  }, defaultPageIndex);
  
  self.add(pagesPicker);
  
  pagesPicker.addEventListener('change', function(e){
  	defaultPageIndex = e.rowIndex;
  })

  var saveBtn = Ti.UI.createButton({
    left: 10,
      top: 130,
      title: 'Save settings'
  })
  saveBtn.addEventListener('click', function(){
    Settings.setServerAddress(serverField.value)
    Settings.setDefaultPageIndex(defaultPageIndex)
  })
  self.add(serverLabel)
    self.add(serverField)
    self.add(saveBtn)
    return self;
};

module.exports = SettingsWindow;
