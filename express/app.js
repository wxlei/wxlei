var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

require("./config/configRouter.js")(app);

var server = app.listen(4002, function () {
	console.log("启动4002")
}); 