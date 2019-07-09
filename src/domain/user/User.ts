import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';

interface UserProps {
    username: string
    password: string
}

export class User {
    username: string
    password: string

    constructor(user: UserProps) {
        this.username = user.username
        this.password = user.password
    }

    validate() {
        if (this.password.length < 5) throw new Exception(ExceptionCode.PW_NOT_SECURE)
    }
}

