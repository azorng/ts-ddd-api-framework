import { User } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { Uuid } from '~/infra/crypto/uuid'

export class UserBuilder {
    user: User
    password: string

    constructor() {
        this.password = 'secure123'

        this.user = new User({
            email: 'johnny@umbrella.co',
            password: this.password
        })

        this.user.id = 112
    }

    withHashedPassword() {
        this.user.password = bcrypt.hash(this.password)
        return this
    }

    build() {
        return this.user
    }
}
