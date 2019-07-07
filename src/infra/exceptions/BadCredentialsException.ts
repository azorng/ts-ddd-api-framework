import { Exception } from '~/domain/Exception';

export class BadCredentialsException extends Exception {
    constructor() {
        super({
            name: 'BAD_CREDENTIALS',
            message: `Incorrect username or password`
        })
    }
}