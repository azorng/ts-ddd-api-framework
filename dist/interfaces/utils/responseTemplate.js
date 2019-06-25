"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseTemplate {
    constructor(status, data) {
        this.response = {
            status,
            data
        };
    }
}
exports.default = ResponseTemplate;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["success"] = "success";
    ResponseStatus["fail"] = "fail";
    ResponseStatus["error"] = "error";
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));
;
