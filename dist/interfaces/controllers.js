"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("~/lib"));
let controllers = {};
lib_1.default.filesInsideFolder('controllers').forEach(controllerFile => {
    const controller = require(`./controllers/${controllerFile}`);
    controllers[controllerFile + 'Controller'] = new controller.default();
});
module.exports = controllers;
