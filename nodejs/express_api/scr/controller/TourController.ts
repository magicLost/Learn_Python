import catchAsync from "../utils/catchAsync";
import { Document, Model } from "mongoose";
import Tour from "../model/TourModel";

abstract class AbstractController {
  getAll(Model: Model<Document>) {
    return catchAsync(async (req, res, next) => {
      const docs = await Model.find();

      res.status(200).json({
        status: "success",
        results: docs.length,
        data: {
          docs
        }
      });
    });
  }
}

class TourController extends AbstractController {
  getAllTours = () => {
    return this.getAll(Tour);
  };
}

export default TourController;
