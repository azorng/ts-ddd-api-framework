import { User } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'

export class UserBuilder {
    user: User

    constructor() {
        this.user = new User({
            email: 'johnny@umbrella.co',
            password: 'secure123',
            firstName: 'Johnny',
            lastName: 'Cash',
            company: 'Umbrella',
            website: 'umbrella.co'
        })
    }

    async withPassword(password: string) {
        this.user.password = await bcrypt.hash('secure123')
        return this
    }

    build() {
        return this.user
    }
}
