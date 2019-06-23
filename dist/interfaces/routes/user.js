"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui = __importStar(require("~/interfaces/routes/_dependencies"));
const { userController } = require('~/interfaces/controllers');
exports.default = (api) => {
    return api
        .get('/user', ui.expressRouteResolver(userController.getUser))
        .get('/user/:user', ui.expressRouteResolver(userController.getUser));
};
