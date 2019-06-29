import EntityBase from '~/domain/EntityBase'

export interface UserProps {
    username: string,
    age: number
}

export class User extends EntityBase {
    private static MIN_LEGAL_AGE = 21

    constructor(public user: UserProps) {
        super()
    }

    get isLegal(): boolean {
        return this.user.age >= User.MIN_LEGAL_AGE
    }
}