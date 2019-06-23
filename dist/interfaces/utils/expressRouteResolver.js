"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseSender_1 = __importDefault(require("~/interfaces/utils/responseSender"));
const response_1 = __importDefault(require("~/interfaces/utils/response"));
const lib_1 = __importDefault(require("~/lib"));
exports.default = (method) => (req, res) => {
    const params = _getParams(req);
    const sender = new responseSender_1.default(res);
    if (_isValidMethod(method, params)) {
        try {
            const methodResult = _executeMethod(method, params);
            sender.send(new response_1.default('success', methodResult));
        }
        catch (err) {
            sender.send(new response_1.default('fail', err));
        }
    }
    else {
        sender.send400();
    }
};
const _executeMethod = (method, params) => method(params);
const _getParams = (req) => {
    let params = !lib_1.default.isEmpty(req.params) ? req.params
        : !lib_1.default.isEmpty(req.body) ? req.body
            : {};
    params.auth = req.get('auth');
    return params;
};
const _isValidMethod = (method, params) => !(!params && method.length > 0);
