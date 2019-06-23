"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    getUser({ user: user }) {
        if (user && user == 'good') {
            return 'this user is good';
        }
        else {
            throw 'this user is NOT good ';
        }
    }
}
exports.default = UserController;
