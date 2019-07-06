import { EntityBase } from '~/domain/EntityBase'

export interface UserProperties {
    username: string
    age?: number
}

export class User extends EntityBase {
    public static MIN_LEGAL_AGE = 21

    constructor(private user: UserProperties) {
        super()
    }

    get isLegal(): boolean {
        return this.user.age! >= User.MIN_LEGAL_AGE
    }

    get username(): string {
        return this.user.username
    }

}