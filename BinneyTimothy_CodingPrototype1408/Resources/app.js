var mainWin = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Pet Store"
});

var mainNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var galButton = Ti.UI.createView ({
	backgroundColor: "red",
	align: "center",
	height: 100,
	width: "100%",
});

var galButtonText = Ti.UI.createLabel({
	text: "Log In",
	textAlign: "center",
	color: "#fff",
});


var loadJs = require ("json");



galButton.add(galButtonText);
mainWin.add(galButton);
mainNav.open();

