import { User } from '~/domain/entities/User'

export type IEventToAction = { [key in keyof typeof Event]: any }

export enum Event {
    user_registered
}

export const eventActions: IEventToAction = {
    user_registered: (user: User) => {
        console.log(`user registered: ${user.email}`)
    }
}
