import * as express from "express";

export default (requestHandler: express.RequestHandler): express.RequestHandler => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    requestHandler(req, res, next).catch((error: Error) => next(error));
  };
};
