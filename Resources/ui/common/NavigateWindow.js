function NavigateWindow() {
  //create module instance
  var self = Ti.UI.createWindow({
    title: L("home")
  });
  var Settings = require("ui/common/Settings")
  var url = 'http://' + Settings.getServerAddress() + Settings.getDefaultPage()
  var button = Ti.UI.createView({
	height: 10,
	width: '100%',
	left: 0,
	top: 0,
	backgroundColor: 'gray'
  })
  
  self.add(button)
  button.addEventListener('click', function(){
  	Ti.App.fireEvent("toggleTabBar");
  })

    var webView = Ti.UI.createWebView({
      url: url,
        left: 0,
        top: 10,
        width: '100%',
        bottom: 0
    })
  self.add(webView)
    return self;
};

module.exports = NavigateWindow;
