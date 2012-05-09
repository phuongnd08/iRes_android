function NavigateWindow() {
  //create module instance
  var self = Ti.UI.createWindow({
    title: L("home")
  });
  var Settings = require("ui/common/Settings")
    var button = Ti.UI.createView({
      height: 10,
      width: '100%',
      left: 0,
      top: 0,
      backgroundColor: 'gray'
    })

  button.addEventListener('click', function(){
    Ti.App.fireEvent("toggleTabBar");
  })

  var webView = Ti.UI.createWebView({
    url: Settings.getDefaultUrl(),
    left: 0,
    top: 10,
    width: '100%',
    bottom: 0
  })
  self.add(webView)
  self.add(button)
  Ti.App.addEventListener("appSettingsChanged", function(){
    webView.setUrl(Settings.getDefaultUrl())
  })
  return self;
};

module.exports = NavigateWindow;
