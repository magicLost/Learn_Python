"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var middleware = require("./TourModelMiddleware");
var TourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
        trim: true,
        maxlength: [50, "A tour name must have less than 10 characters"],
        minlength: [10, "A tour name must have more than 10 characters"]
        //validate: [validator.isAlpha, "Tour name must only contain characters"]
    },
    slug: {
        type: String
    },
    duration: {
        type: Number,
        required: [true, "A tour must have a duration"]
    },
    ratingsAverage: {
        type: Number,
        "default": 4.5,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
        set: function (val) { return Math.round(val * 10) / 10; }
    }
});
TourSchema.virtual("durationWeeks").get(middleware.addVirtualFieldDurationWeeks);
exports["default"] = mongoose.model("Tour", TourSchema);
