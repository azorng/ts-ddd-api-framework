"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("~/lib"));
const express_1 = require("express");
exports.default = () => {
    let api = express_1.Router();
    lib_1.default.filesInsideFolder('routes').forEach((file) => {
        api = require(`./routes/${file}`).default(api);
    });
    return api;
};
