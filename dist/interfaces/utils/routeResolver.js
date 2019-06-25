"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseSender_1 = __importDefault(require("~/interfaces/utils/responseSender"));
const responseTemplate_1 = __importStar(require("~/interfaces/utils/responseTemplate"));
const lib_1 = __importDefault(require("~/lib"));
exports.default = (method) => (req, res) => {
    const params = _getParams(req);
    const sender = new responseSender_1.default(res);
    if (_isValidMethod(method, params)) {
        try {
            const methodResult = _executeMethod(method, params);
            sender.send(new responseTemplate_1.default(responseTemplate_1.ResponseStatus.success, methodResult));
        }
        catch (err) {
            sender.send(new responseTemplate_1.default(responseTemplate_1.ResponseStatus.fail, err));
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
