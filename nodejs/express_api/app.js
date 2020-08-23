"use strict";
exports.__esModule = true;
var express = require("express");
var HomeController_1 = require("./scr/controller/HomeController");
var app = express();
var homeController = new HomeController_1["default"]();
//express.NextFunction
/* app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("Hello World!");
}); */
app.get("/", homeController.index);
//app.get("/tours", tourController.getAllTours);
/* const middleware: express.RequestHandler = (req, res, next) => {
  next();
}; */
exports["default"] = app;
