"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("~/interfaces/router"));
const body_parser_1 = __importDefault(require("body-parser"));
express_1.default()
    .disable('x-powered-by')
    .use(body_parser_1.default.urlencoded({ extended: true }))
    .use('/', router_1.default())
    .listen(1000);
