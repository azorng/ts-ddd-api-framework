export default class UserController {
    getUser({ user: user }: getUserParams) {
        if (user && user == 'good') {
            return 'this user is good'
        } else {
            throw 'this user is NOT good '
        }

    }
}

export interface getUserParams {
    user: string
}