import { User } from '~/domain/entities/User'

export class UserBuilder {
    user: User

    constructor() {
        this.user = new User({
            email: 'userOne',
            password: 'secure123'
        })
    }

    build() {
        return this.user
    }
}
