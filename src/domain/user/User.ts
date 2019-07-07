import { Exception } from '~/domain/Exception';

interface UserProps {
    username: string
    password: string
}

export class User implements UserProps {
    username: string
    password: string

    constructor(user: UserProps) {
        this.username = user.username
        this.password = user.password
    }

    validate() {
        if (this.password.length < 5) throw new UserValidationException('Password is not secure!')
    }
}

class UserValidationException extends Exception {
    constructor(message: string) {
        super({
            name: 'USER_VALIDATION_ERROR',
            message
        })
    }
}