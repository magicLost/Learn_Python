"use strict";
exports.__esModule = true;
exports["default"] = (function (requestHandler) {
    return function (req, res, next) {
        requestHandler(req, res, next)["catch"](function (error) { return next(error); });
    };
});
