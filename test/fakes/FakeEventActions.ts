import { IEventToAction } from '~/app/Events'
import { User } from '~/domain/entities/User'

export const fakeEventActions: IEventToAction = {
    user_registered: (user: User) => {
        console.log(`fake user registered: ${user.email}`)
    }
}
