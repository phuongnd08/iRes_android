function SettingsWindow() {
  //create module instance
  var self = Ti.UI.createWindow({
    title: L("settings")
  });
  var Settings = require("ui/common/Settings")
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
      value: Settings.get(Settings.SERVER_ADDRESS),
      borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
  })
  var saveBtn = Ti.UI.createButton({
    left: 10,
      top: 70,
      title: 'Save settings'
  })
  saveBtn.addEventListener('click', function(){
    Settings.set(Settings.SERVER_ADDRESS, serverField.value)
  })
  self.add(serverLabel)
    self.add(serverField)
    self.add(saveBtn)
    return self;
};

module.exports = SettingsWindow;
