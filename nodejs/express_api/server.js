"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = 3000;
var server = app_1["default"].listen(port, function () {
    return console.log("App running on port " + port);
});
