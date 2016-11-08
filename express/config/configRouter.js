var login = require("../router/login.js")
module.exports = function (app) {
	app.get("/login", login);

}