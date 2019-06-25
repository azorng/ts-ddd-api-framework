"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseTemplate_1 = require("~/interfaces/utils/responseTemplate");
class Sender {
    constructor(res) {
        this.res = res;
    }
    send(response) {
        this.res
            .status(statusNameToCode(response.response.status))
            .json(response.response);
    }
    send400(body = {}) {
        this.res
            .status(statusNameToCode(responseTemplate_1.ResponseStatus.error))
            .json({
            status: responseTemplate_1.ResponseStatus.error,
            body
        });
    }
}
exports.default = Sender;
const statusNameToCode = (statusName) => {
    const responseCode = {
        [responseTemplate_1.ResponseStatus.success]: 200,
        [responseTemplate_1.ResponseStatus.error]: 500,
        [responseTemplate_1.ResponseStatus.fail]: 400
    };
    return responseCode[statusName];
};
