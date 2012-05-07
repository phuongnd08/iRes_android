function IResTabGroup() {
  //create module instance
  var self = Ti.UI.createTabGroup({
  	tabBarVisible: true
  });

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

  var TABBAR_HEIGHT = 47
  Ti.App.addEventListener('toggleTabBar', function(){
    if (self.tabBarVisible) {
        self.animate({ top: -TABBAR_HEIGHT, duration: 500 });
        self.tabBarVisible = false;
    } else {
        self.animate({ top: 0, duration: 500 });
        self.tabBarVisible = true;
    }
  })
  return self;
};

module.exports = IResTabGroup;
