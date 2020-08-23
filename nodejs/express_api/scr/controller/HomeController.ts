import catchAsync from "../utils/catchAsync";
import { Document, Model } from "mongoose";
import Tour from "../model/TourModel";

class HomeController {

  index = () => {
    return catchAsync(async (req, res, next) => {
  
        res.status(200).type('html').send('<h4>Hello, from Express!</h4>');
    });
  };

}

export default HomeController;