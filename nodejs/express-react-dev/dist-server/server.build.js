/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/Kernel.ts":
/*!******************************!*\
  !*** ./src/server/Kernel.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controller_ErrorController_ErrorController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/ErrorController/ErrorController */ \"./src/server/controller/ErrorController/ErrorController.ts\");\n/* harmony import */ var _controller_AuthController_AuthController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/AuthController/AuthController */ \"./src/server/controller/AuthController/AuthController.ts\");\n/* harmony import */ var _routes_UserRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/UserRouter */ \"./src/server/routes/UserRouter.ts\");\n/* harmony import */ var _entity_mongoose_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity/mongoose/UserModel/UserModel */ \"./src/server/entity/mongoose/UserModel/UserModel.ts\");\n/* harmony import */ var _controller_UserController_UserController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller/UserController/UserController */ \"./src/server/controller/UserController/UserController.ts\");\n\n//import { renderToString } from 'react-dom/server';\n//import routes from \"../client/routes\";\n//import {renderRoutes} from 'react-router-config';\n//import {StaticRouter } from 'react-router-dom';\n//import {Provider} from 'react-redux';\n//import serialize from 'serialize-javascript';\n\n //import App from '../client/App';\n//import FileSystemHelper from './utils/FileSystem/FileSystemHelper';\n//import AppError from \"./utils/AppError\";\n\n\n\n\n\n //const { PerformanceObserver, performance } = require('perf_hooks');\n\nclass Kernel {\n  //observer: PerformanceObserver;\n  constructor(_config) {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"app\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"config\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"mainHtml\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"errorController\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"userRouter\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"init\", config => {\n      this.config = config;\n      this.errorController = new _controller_ErrorController_ErrorController__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      this.userRouter = new _routes_UserRouter__WEBPACK_IMPORTED_MODULE_5__[\"default\"](new _controller_AuthController_AuthController__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_entity_mongoose_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], process.env.JWT_SECRET, process.env.JWT_COOKIE_EXPIRES_AT, process.env.JWT_EXPIRES_AT), new _controller_UserController_UserController__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_entity_mongoose_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n      this.app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n      const fs = this.config.getFileSystemHelper();\n      const pathToIndexHtml = this.config.getPathToIndexHtml();\n      if (!fs.isFileExists(pathToIndexHtml)) throw new Error(`No index.html file on address - ${pathToIndexHtml}`);\n      this.mainHtml = \"\";\n      fs.readFile(pathToIndexHtml, true).then(data => {\n        this.mainHtml = data;\n      });\n    });\n\n    this.init(_config);\n    this.app.use(Object(express__WEBPACK_IMPORTED_MODULE_2__[\"static\"])(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, \"..\", \"build\"))); //app.use(checkRouteForExisting);\n\n    this.app.use(\"/users\", this.userRouter.getRouter());\n    this.app.all(\"*\", (request, response, next) => {\n      response.send(this.mainHtml);\n    });\n    this.app.use(this.errorController.globalErrorHandler);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kernel);\n\n//# sourceURL=webpack:///./src/server/Kernel.ts?");

/***/ }),

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var app_root_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app-root-path */ \"app-root-path\");\n/* harmony import */ var app_root_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(app_root_path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_FileSystem_FileSystemHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/FileSystem/FileSystemHelper */ \"./src/server/utils/FileSystem/FileSystemHelper.ts\");\n\n\n\n\n\nclass Config {\n  constructor() {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"rootPath\", \"\");\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"pathToIndexHtml\", \"\");\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"fileSystemHelper\", undefined);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"userRoles\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getRootPath\", () => {\n      return this.rootPath;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getPathToIndexHtml\", () => {\n      return this.pathToIndexHtml;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getFileSystemHelper\", () => {\n      if (this.fileSystemHelper === undefined) {\n        this.fileSystemHelper = new _utils_FileSystem_FileSystemHelper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      }\n\n      return this.fileSystemHelper;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getUserRoles\", () => this.userRoles);\n\n    this.rootPath = app_root_path__WEBPACK_IMPORTED_MODULE_1__[\"path\"];\n    this.pathToIndexHtml = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(this.rootPath, \"build\", \"iiindex.html\");\n    this.userRoles = ['admin', 'user']; //console.log(\"Create config\");\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/server/config.ts?");

/***/ }),

/***/ "./src/server/controller/AuthController/AuthController.ts":
/*!****************************************************************!*\
  !*** ./src/server/controller/AuthController/AuthController.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/AppError */ \"./src/server/utils/AppError.ts\");\n/* harmony import */ var _BaseMiddleware_BaseMiddleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseMiddleware/BaseMiddleware */ \"./src/server/controller/BaseMiddleware/BaseMiddleware.ts\");\n\n\n\n\n\n //import sendEmail from \"./../../utils/email\";\n\nclass AuthController extends _BaseMiddleware_BaseMiddleware__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  //process.env.JWT_SECRET\n  constructor(userModel, jwtSecret, jwtCookieExpiresAt, jwtExpiresAt) {\n    super();\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"jwtSecret\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"jwtCookieExpiresAt\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"jwtExpiresAt\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"jwtVerify\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"userModel\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"signup\", this.catchAsync(async (req, res, next) => {\n      const user = await this.userModel.create({\n        name: req.body.name,\n        email: req.body.email,\n        role: req.body.role,\n        password: req.body.password,\n        passwordConfirm: req.body.passwordConfirm\n      });\n      this.createAndSendToken(user, 201, req, res);\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"login\", this.catchAsync(async (req, res, next) => {\n      const {\n        email,\n        password\n      } = req.body;\n\n      if (!email || !password) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"No passwor or email\", 400));\n      }\n\n      const user = await this.userModel.findOne({\n        email\n      }).select(\"+password\");\n\n      if (!user || !(await user.correctPassword(password, user.password))) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Incorrect email or password\", 401));\n      }\n\n      this.createAndSendToken(user, 200, req, res);\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"protect\", this.catchAsync(async (req, res, next) => {\n      /* GET TOKEN */\n      let token;\n\n      if (req.headers.authorization && req.headers.authorization.startsWith(\"Bearer\")) {\n        token = req.headers.authorization.split(\" \")[1];\n      }\n\n      if (!token) return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"You are not logged in.\", 401));\n      /* VERIFY TOKEN */\n\n      const decoded = await this.jwtVerify(token, this.jwtSecret);\n      /* CHECK IF USER EXISTS */\n\n      const user = await this.userModel.findById(decoded.id);\n      if (!user) return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"The user belonging to this token does not exists.\", 401));\n      /* CHECK IF USER CHANGED PASSWORD AFTER THE TOKEN WAS ISSUED */\n\n      if (user.changedPasswordAfter(decoded.iat)) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"User recently changed password. Please login again\", 401));\n      }\n      /* GRANT ACCESS TO PROTECTED ROUTE */\n\n\n      req.user = user;\n      next();\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"restrictTo\", (...roles) => {\n      return (req, res, next) => {\n        if (!roles.includes(req.user.role)) {\n          return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"You do not have permission to perform this action\", 403));\n        }\n\n        next();\n      };\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"forgotPassword\", this.catchAsync(async (req, res, next) => {\n      const user = await this.userModel.findOne({\n        email: req.body.email\n      });\n\n      if (!user) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"There is no user with email address.\", 404));\n      }\n\n      const resetToken = user.createPasswordResetToken();\n      await user.save({\n        validateBeforeSave: false\n      });\n      const resetUrl = `${req.protocol}://${req.get(\"host\")}/api/v1/users/reset-password/${resetToken}`;\n      const message = `Forgot your password? Submit a request with your new password and passwordConfirm to: ${resetUrl}`;\n\n      try {\n        /* await sendEmail({\n          email: user.email,\n          subject: \"Your password reset token (valid for 10 minutes)\",\n          message\n        }); */\n        res.status(200).json({\n          status: \"success\",\n          message: \"Token sent to email\"\n        });\n      } catch (err) {\n        user.createPasswordResetToken = undefined;\n        user.passwordResetExpires = undefined;\n        await user.save({\n          validateBeforeSave: false\n        });\n        return next( //\"There was an error sending the email. Try again later!\"\n        new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](err.message, 500));\n      }\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"resetPassword\", this.catchAsync(async (req, res, next) => {\n      //get user based on token\n      const hashedToken = crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHash(\"sha256\").update(req.params.token).digest(\"hex\");\n      const user = await this.userModel.findOne({\n        passwordResetToken: hashedToken,\n        passwordResetExpires: {\n          $gt: Date.now()\n        }\n      });\n\n      if (!user) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Token is invalid or expired\", 400));\n      } //set new password\n\n\n      user.password = req.body.password;\n      user.passwordConfirm = req.body.passwordConfirm;\n      user.passwordResetToken = undefined;\n      user.passwordResetExpires = undefined; //update user\n\n      await user.save(); //login user\n\n      this.createAndSendToken(user, 200, req, res);\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"updatePassword\", this.catchAsync(async (req, res, next) => {\n      // 1 Get user from collection\n      const user = await this.userModel.findById(req.user.id).select(\"+password\");\n      const {\n        currentPassword,\n        password,\n        passwordConfirm\n      } = req.body;\n      if (!user) return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Some error. Please log in and try again...\", 401)); // 2 Check if posted password correct\n\n      if (!(await user.correctPassword(currentPassword, user.password))) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Wrong password. Please try again...\", 401));\n      } // 3 Update password\n\n\n      user.password = password;\n      user.passwordConfirm = passwordConfirm;\n      await user.save(); // 4 Log user in\n\n      this.createAndSendToken(user, 201, req, res);\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"signToken\", id => {\n      return Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__[\"sign\"])({\n        id: id\n      }, this.jwtSecret, {\n        expiresIn: this.jwtExpiresAt\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"createAndSendToken\", (user, statusCode, req, res) => {\n      const token = this.signToken(user._id); //if (process.env.NODE_ENV === \"production\") cookieOptions.secure = true;\n\n      res.cookie(\"jwt\", token, {\n        expires: new Date(Date.now() + parseInt(this.jwtCookieExpiresAt) * 24 * 60 * 60 * 1000),\n        httpOnly: true,\n        secure: req.secure || req.headers[\"x-forwarded-proto\"] === \"https\"\n      });\n      user.password = undefined;\n      res.status(statusCode).json({\n        status: \"success\",\n        token,\n        data: {\n          user\n        }\n      });\n    });\n\n    this.jwtCookieExpiresAt = jwtCookieExpiresAt;\n    this.jwtExpiresAt = jwtExpiresAt;\n    this.jwtSecret = jwtSecret;\n    this.jwtVerify = Object(util__WEBPACK_IMPORTED_MODULE_2__[\"promisify\"])(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__[\"verify\"]);\n    this.userModel = userModel;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthController);\n\n//# sourceURL=webpack:///./src/server/controller/AuthController/AuthController.ts?");

/***/ }),

/***/ "./src/server/controller/BaseMiddleware/BaseMiddleware.ts":
/*!****************************************************************!*\
  !*** ./src/server/controller/BaseMiddleware/BaseMiddleware.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BaseMiddleware {\n  constructor() {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"catchAsync\", requestHandler => {\n      return async (req, res, next) => {\n        //requestHandler(req, res, next).catch((error: Error) => { console.log(\"CATCH ASYNC ERROR\", error); next(error)});\n        try {\n          await requestHandler(req, res, next);\n        } catch (error) {\n          console.log(\"CATCH ASYNC ERROR\", error.message);\n          next(error);\n        }\n      };\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseMiddleware);\n\n//# sourceURL=webpack:///./src/server/controller/BaseMiddleware/BaseMiddleware.ts?");

/***/ }),

/***/ "./src/server/controller/ErrorController/ErrorController.ts":
/*!******************************************************************!*\
  !*** ./src/server/controller/ErrorController/ErrorController.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/AppError */ \"./src/server/utils/AppError.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nclass ErrorController {\n  constructor() {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"globalErrorHandler\", (err, req, res, next) => {\n      //console.log(\"Error handler\");\n      err.statusCode = err.statusCode || 500;\n      err.status = err.status || \"error\";\n\n      if (true) {\n        this.sendErrorDev(err, res);\n      } else {}\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"handleCastErrorDB\", err => {\n      const message = `Invalid ${err.path}: ${err.value}`;\n      return new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](message, 400);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"handleValidationErrorDB\", err => {\n      const errors = Object.values(err.errors).map(el => el.message);\n      const message = `Invalid input data. ${errors.join(\". \")}`;\n      return new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](message, 400);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"handleDuplicateFieldsDB\", err => {\n      const value = err.errmsg.match(/([\"'])(\\\\?.)*?\\1/)[0];\n      const message = `Duplicate field value: ${value}. Please use another value`;\n      return new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](message, 400);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"handleJWTError\", () => new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`Invalid token. Please login again`, 401));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"handleJWTExpiredError\", () => new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`Token has expired. Please login again`, 401));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"sendErrorDev\", (err, res) => {\n      res.status(err.statusCode).json({\n        status: err.status,\n        error: err,\n        message: err.message,\n        stack: err.stack\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"sendErrorProd\", (err, res) => {\n      if (err.isOperational) {\n        res.status(err.statusCode).json({\n          status: err.status,\n          message: err.message\n        });\n      } else {\n        //console.error(\"sendErrorProd \", err);\n        res.status(500).json({\n          status: \"error\",\n          message: \"Something wrong\"\n        });\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorController);\n\n//# sourceURL=webpack:///./src/server/controller/ErrorController/ErrorController.ts?");

/***/ }),

/***/ "./src/server/controller/UserController/UserController.ts":
/*!****************************************************************!*\
  !*** ./src/server/controller/UserController/UserController.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BaseMiddleware_BaseMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseMiddleware/BaseMiddleware */ \"./src/server/controller/BaseMiddleware/BaseMiddleware.ts\");\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/AppError */ \"./src/server/utils/AppError.ts\");\n\n\n\n\nclass UserController extends _BaseMiddleware_BaseMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(userModel) {\n    super();\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"userModel\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getAllUsers\", this.catchAsync(async (req, res, next) => {\n      const users = await this.userModel.find({}, null, {\n        limit: 100\n      });\n      res.status(200).json({\n        status: \"success\",\n        results: users.length,\n        data: {\n          users\n        }\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getUserById\", this.catchAsync(async (req, res, next) => {\n      const user = await this.userModel.findById(req.params.id);\n      res.status(200).json({\n        status: \"success\",\n        data: {\n          user\n        }\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getMe\", (req, res, next) => {\n      if (req.user) {\n        const user = req.user;\n        user.password = undefined;\n        user.passwordConfirm = undefined;\n        res.status(200).json({\n          status: \"success\",\n          data: {\n            user\n          }\n        });\n      } else {\n        res.status(404).json({\n          status: \"fail\",\n          message: \"You must login first...\"\n        });\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"updateMe\", this.catchAsync(async (req, res, next) => {\n      // 1 Create error if user post password\n      if (req.body.password || req.body.passwordConfirm) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"This route is not for password updates. Please use /update-password\", 400));\n      } // 2 Update user document\n\n\n      const filteredBody = this.filterObj(req.body, \"name\", \"email\");\n      const updatedUser = await this.userModel.findByIdAndUpdate(req.user.id, filteredBody, {\n        new: true,\n        runValidators: true\n      });\n      res.status(200).json({\n        status: \"success\",\n        data: {\n          user: updatedUser\n        }\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"deleteMe\", this.catchAsync(async (req, res, next) => {\n      await this.userModel.findByIdAndUpdate(req.user.id, {\n        active: false\n      });\n      res.status(204).json({\n        status: \"success\",\n        data: null\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"createUser\", (req, res) => {\n      res.status(501).json({\n        status: \"fail\",\n        message: \"Not implemented\"\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"updateUser\", this.catchAsync(async (req, res, next) => {\n      //new: true - says that in tour it was updated tour\n      const doc = await this.userModel.findByIdAndUpdate(req.params.id, req.body, {\n        new: true,\n        runValidators: true\n      });\n\n      if (!doc) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"No document found\", 404));\n      }\n\n      res.status(201).json({\n        status: \"success\",\n        data: {\n          doc\n        }\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"deleteUser\", this.catchAsync(async (req, res, next) => {\n      //new: true - says that in tour it was updated tour\n      const doc = await this.userModel.findByIdAndDelete(req.params.id);\n\n      if (!doc) {\n        return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"No document found\", 404));\n      }\n\n      res.status(204).json({\n        status: \"success\",\n        data: null\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"filterObj\", (obj, ...allowedFields) => {\n      const newObj = {};\n      Object.keys(obj).forEach(element => {\n        if (allowedFields.includes(element)) newObj[element] = obj[element];\n      });\n      return newObj;\n    });\n\n    this.userModel = userModel;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserController);\n\n//# sourceURL=webpack:///./src/server/controller/UserController/UserController.ts?");

/***/ }),

/***/ "./src/server/entity/mongoose/UserModel/UserModel.ts":
/*!***********************************************************!*\
  !*** ./src/server/entity/mongoose/UserModel/UserModel.ts ***!
  \***********************************************************/
/*! exports provided: UserSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserSchema\", function() { return UserSchema; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator/lib/isEmail */ \"validator/lib/isEmail\");\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: [[true, \"Please, tell us your name\"]],\n    minlength: [2, \"Too short name\"],\n    maxlength: [55, \"Too long name\"]\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true,\n    lowercase: true,\n    validate: [validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default.a, \"Please provide a valid email\"]\n  },\n  role: {\n    type: String,\n    enum: [\"admin\", \"user\", \"guide\", \"lead-guide\"],\n    default: \"user\"\n  },\n  password: {\n    type: String,\n    required: [true, \"Please provide a password.\"],\n    minlength: [8, \"Too low secure password.\"],\n    maxlength: [255, \"What? Are you serious.\"],\n    select: false\n  },\n  passwordConfirm: {\n    type: String,\n    required: [true, \"Please, confirm your password\"],\n    validate: {\n      //This only work on .CREATE and .SAVE!!!\n      validator: function (value) {\n        return value === this.password;\n      },\n      message: \"Password is not the same\"\n    },\n    select: false\n  },\n  passwordChangedAt: Date,\n  passwordResetToken: String,\n  passwordResetExpires: Date,\n  active: {\n    type: Boolean,\n    default: true,\n    select: false\n  }\n});\n/* userSchema.pre(/^find/, function(next) {\n  //this points to query\n  this.find({ active: { $ne: false } });\n  next();\n}); */\n\n/* userSchema.pre(\"save\", async function(next) {\n  if (!this.isModified(\"password\")) return next();\n  this.password = await bcrypt.hash(this.password, 12);\n  this.passwordConfirm = undefined;\n  next();\n});\nuserSchema.pre(\"save\", function(next) {\n  if (!this.isModified(\"password\") || this.isNew) return next();\n  this.passwordChangedAt = Date.now() - 1000;\n  next();\n});\n */\n\nUserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {\n  return await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compare(candidatePassword, userPassword);\n};\n\nUserSchema.methods.changedPasswordAfter = function (jwtTimestamp) {\n  if (this.passwordChangedAt) {\n    const changedTimestamp = parseInt((this.passwordChangedAt.getTime() / 1000).toString(), 10);\n    return jwtTimestamp < changedTimestamp;\n  }\n\n  return false;\n};\n\nUserSchema.methods.createPasswordResetToken = function () {\n  const resetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default.a.randomBytes(32).toString(\"hex\");\n  this.passwordResetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default.a.createHash(\"sha256\").update(resetToken).digest(\"hex\");\n  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;\n  return resetToken;\n};\n\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);\n\n//# sourceURL=webpack:///./src/server/entity/mongoose/UserModel/UserModel.ts?");

/***/ }),

/***/ "./src/server/routes/UserRouter.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/UserRouter.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass UserRouter {\n  constructor(authController, userController) {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"authController\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"userController\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"router\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"init\", () => {\n      this.router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\n      this.router.post(\"/signup\", this.authController.signup);\n      this.router.post(\"/login\", this.authController.login);\n      this.router.post(\"/forgot-password\", this.authController.forgotPassword);\n      this.router.patch(\"/reset-password/:token\", this.authController.resetPassword);\n      this.router.use(this.authController.protect);\n      this.router.patch(\"/update-password\", this.authController.updatePassword);\n      this.router.get(\"/me\", this.userController.getMe, this.userController.getUserById);\n      this.router.patch(\"/update-me\", this.userController.updateMe);\n      this.router.delete(\"/delete-me\", this.userController.deleteMe);\n      this.router.use(this.authController.restrictTo(\"admin\"));\n      this.router.route(\"/\").get(this.userController.getAllUsers).post(this.userController.createUser);\n      this.router.route(\"/:id\").get(this.userController.getUserById).patch(this.userController.updateUser).delete(this.userController.deleteUser);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getRouter\", () => {\n      return this.router;\n    });\n\n    this.authController = authController;\n    this.userController = userController;\n    this.init();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRouter);\n\n//# sourceURL=webpack:///./src/server/routes/UserRouter.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kernel */ \"./src/server/Kernel.ts\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/server/config.ts\");\n\n\n //import { path as rootPath } from 'app-root-path';\n\n\n/* ERORRS */\n//On uncaught exception we must restart our server to clean stack\n\nprocess.on(\"uncaughtException\", err => {\n  console.error(err.name, err.message);\n  process.exit(1);\n});\nprocess.on(\"uncaughtException\", err => {\n  console.error(err.name, err.message);\n  process.exit(1);\n});\nprocess.on(\"unhandledRejection\", err => {\n  console.error(err.name, err.message);\n  server.close(() => {\n    process.exit(1);\n  });\n});\nprocess.on(\"SIGTERM\", () => {\n  console.error(\"SIGTERM received\");\n  server.close(() => {\n    process.exit(1);\n  });\n});\n/* END ERORRS */\n\nconst config = new _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"](); //On uncaught exception we must restart our server to clean stack\n//https://www.natours.dev\n//console.log(\"PATH\", path.join(rootPath, \"config.env\"));\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config({\n  path: path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(config.getRootPath(), \"config.env\")\n}); //const app = require(\"./app\");\n//console.log(\"NODE ENV\", process.env.NODE_ENV);\n//console.log(\"NODE PASS\", process.env.PASS);\n\nconst kernel = new _Kernel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config);\nconst server = kernel.app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/AppError.ts":
/*!**************************************!*\
  !*** ./src/server/utils/AppError.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"statusCode\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"status\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"isOperational\", void 0);\n\n    this.statusCode = statusCode;\n    this.status = `${statusCode}`.startsWith(\"4\") ? \"fail\" : \"error\";\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppError);\n\n//# sourceURL=webpack:///./src/server/utils/AppError.ts?");

/***/ }),

/***/ "./src/server/utils/FileSystem/FileSystemHelper.ts":
/*!*********************************************************!*\
  !*** ./src/server/utils/FileSystem/FileSystemHelper.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rimraf */ \"rimraf\");\n/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ncp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ncp */ \"ncp\");\n/* harmony import */ var ncp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ncp__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nclass FileSystemHelper {\n  constructor() {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"isFileExists\", path => fs.existsSync(path));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"makeDir\", (path, isAsync = false) => {\n      return promisify(fs.mkdir)(path).catch(error => this.catchError(error, isAsync));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"deleteDir\", (path, isAsync = false) => {\n      return promisify(rimraf__WEBPACK_IMPORTED_MODULE_1___default.a)(path).catch(error => this.catchError(error, isAsync)); //return await this.rimrafPromisify(path);\n\n      /* rimraf(path, err => {\n          if (err) {\n          return console.error(err);\n          }\n          console.log(`${path} - successfully deleted.`);\n      }); */\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"copyDir\", (pathToCopy, pathDestination, isAsync = false) => {\n      //ncp.limit = 16;\n      return promisify(ncp__WEBPACK_IMPORTED_MODULE_2__[\"ncp\"])(pathToCopy, pathDestination).catch(error => this.catchError(error, isAsync));\n      /* ncp(pathToCopy, pathDestination, err => {\n          if (err) {\n          return console.error(err);\n          }\n          console.log(\"Copy dir done!\");\n      }); */\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"writeFile\", (path, data, isAsync = false, utf = \"utf-8\") => {\n      return promisify(fs.writeFile)(path, data, utf).catch(error => this.catchError(error, isAsync));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"readFile\", (path, isAsync = false, utf = \"utf-8\") => {\n      return promisify(fs.readFile)(path, utf).catch(error => this.catchError(error, isAsync));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"catchError\", (error, isAsync) => {\n      if (isAsync) {\n        console.log(`[ASYNC] ${error.message}`);\n      } else {\n        throw error;\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileSystemHelper);\n\n//# sourceURL=webpack:///./src/server/utils/FileSystem/FileSystemHelper.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "app-root-path":
/*!********************************!*\
  !*** external "app-root-path" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"app-root-path\");\n\n//# sourceURL=webpack:///external_%22app-root-path%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "ncp":
/*!**********************!*\
  !*** external "ncp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ncp\");\n\n//# sourceURL=webpack:///external_%22ncp%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rimraf\");\n\n//# sourceURL=webpack:///external_%22rimraf%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator/lib/isEmail\");\n\n//# sourceURL=webpack:///external_%22validator/lib/isEmail%22?");

/***/ })

/******/ });