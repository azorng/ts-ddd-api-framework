import EntityBase from '~/domain/EntityBase'

export type UserProps = {
    username: string
    age?: number
}

export class User extends EntityBase {
    private static MIN_LEGAL_AGE = 21

    constructor(private user: UserProps) {
        super()
    }

    get isLegal(): boolean {
        return this.user.age! >= User.MIN_LEGAL_AGE
    }

    get username(): string {
        return this.user.username
    }
    
    get sex(): boolean {
        return true
    }
}