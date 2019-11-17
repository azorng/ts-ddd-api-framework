import { EventBus } from '~/infra/event/EventBus'
import { fakeEventActions } from 'test/fakes/FakeEventActions'
export const initTestSetup = () => {
    EventBus._wireEvents(fakeEventActions)
}
