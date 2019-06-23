"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sender {
    constructor(result) {
        this.result = result;
    }
    send(response) {
        const res = response.response;
        this.result
            // .status(res.status)
            .json(res);
    }
    send400(body = {}) {
        this.result
            // .status(400)
            .json({
            // status: 'error',
            body
        });
    }
}
exports.default = Sender;
