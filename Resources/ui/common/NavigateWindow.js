function NavigateWindow() {
  //create module instance
  var self = Ti.UI.createWindow({
    title: L("home")
  });
  var Settings = require("ui/common/Settings")
    var url = "about:blank"
    var server;
  if (server = Settings.get(Settings.SERVER_ADDRESS)){
    url = 'http://' + server + "/waiter"
  }
  Ti.API.debug(url)
    var webView = Ti.UI.createWebView({
      url: url,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    })
  self.add(webView)
    return self;
};

module.exports = NavigateWindow;
