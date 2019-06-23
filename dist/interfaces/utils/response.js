"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(status, res) {
        this.status = status;
        this.body = res;
    }
    get response() {
        return {
            status: this.status,
            body: this.body
        };
    }
}
exports.default = Response;
