"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui = __importStar(require("~/interfaces/routes/_dependencies"));
const user_1 = __importDefault(require("~/interfaces/controllers/user"));
const userController = new user_1.default();
exports.default = (api) => {
    return api
        .get('/user', ui.routeResolver(userController.getUser))
        .get('/user/:user', ui.routeResolver(userController.getUser));
};
