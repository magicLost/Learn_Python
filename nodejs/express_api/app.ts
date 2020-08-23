import * as express from "express";
import HomeController from "./scr/controller/HomeController";

const app: express.Application = express();

const homeController = new HomeController();

//express.NextFunction
/* app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("Hello World!");
}); */

app.get("/", homeController.index);



//app.get("/tours", tourController.getAllTours);

/* const middleware: express.RequestHandler = (req, res, next) => {
  next();
}; */

export default app;
