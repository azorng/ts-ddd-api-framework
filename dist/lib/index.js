"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const rootDir = path_1.default.dirname(__dirname);
exports.default = {
    filesInsideFolder: (folder, withExtension = false) => {
        const ignoredFiles = ['index.js', '_*'];
        return glob_1.default.sync(`${rootDir}/**/${folder}/*.js`, {
            ignore: ignoredFiles.map(file => `**/${file}`)
        }).map(file => {
            const fileNameWithExtension = file.substring(file.lastIndexOf('/') + 1);
            const fileName = fileNameWithExtension.substring(0, fileNameWithExtension.length - 3);
            return withExtension ? fileNameWithExtension : fileName;
        });
    },
    isEmpty: (object) => {
        return Object.entries(object).length === 0 && object.constructor === Object;
    }
};
