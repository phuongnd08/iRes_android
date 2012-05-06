function IResTabGroup() {
  //create module instance
  var self = Ti.UI.createTabGroup();

  //create app tabs
  var SettingsWindow = require("ui/common/SettingsWindow");
  var NavigateWindow = require("ui/common/NavigateWindow")
  var win1 = NavigateWindow(),
      win2 = SettingsWindow();

  var tab1 = Ti.UI.createTab({
    icon: 'images/icons/navigate.png',
    window: win1
  });

  var tab2 = Ti.UI.createTab({
    icon: 'images/icons/settings.png',
    window: win2
  });

  self.addTab(tab1);
  self.addTab(tab2);

  return self;
};

module.exports = IResTabGroup;
