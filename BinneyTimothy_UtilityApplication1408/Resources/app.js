// Main Code for Home Page

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#1874cd",
	title: "Home"
});

var mainNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

// Home Page Header+Label
var breedaholicsView = Ti.UI.createView({
	backgroundColor: "#ff7f00",
	top: 20,
	height: 75,
	width: "80%",
});

var breedaholicsText = Ti.UI.createLabel({
	text: "Breed-Aholics",
	textAlign: "Center",
	color: "white",
});

// Home Page Text Fields+ Hints
var emailTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top: 180,
	height: 30,
	width: "50%",
});

var passwordTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top: emailTextField.top + 60,
	width: "50%",
	height: 30,
});

var emailInputView = Ti.UI.createView({
	top: 153,
	height: 30,
});

var emailInputHint = Ti.UI.createLabel({
	text: "Email",
	textAlign: "Left",	
});

var passInputView = Ti.UI.createView({
	top: emailTextField.top + emailTextField.height + 5,
	height: 30,
});

var passInputHint = Ti.UI.createLabel({
	text: "Password",
	textAlign: "Left",	
});

// Log/Register Buttons + labels
var logButton = Ti.UI.createView ({
	backgroundColor: "#ff7f00",
	bottom: 170,
	height: 50,
	width: 150,
});

var logButtonText = Ti.UI.createLabel({
	text: "Log In",
	textAlign: "center",
	color: "#fff",
});

var registerButton = Ti.UI.createView ({
	backgroundColor: "#ff7f00",
	bottom: 110,
	height: 50,
	width: 200,
});

var registerButtonText = Ti.UI.createLabel({
	text: "Register",
	textAlign: "center",
	color: "#fff",
});

var loadJs = require ("JSON");
var loadJS = require ("register");


breedaholicsView.add(breedaholicsText);
emailInputView.add(emailInputHint);
passInputView.add(passInputHint);
logButton.add(logButtonText);
registerButton.add(registerButtonText);
mainWin.add(breedaholicsView,emailTextField,passwordTextField,logButton,passInputView,emailInputView,registerButton);
mainNav.open();
