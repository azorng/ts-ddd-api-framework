import { EventEmitter } from 'events'
import { eventActions as defaultEventActions, Event, IEventToAction } from '~/app/Events'

export class EventBus {
    public static emitter = new EventEmitter()

    private static _init = (() => {
        EventBus._wireEvents(defaultEventActions)
    })()

    public static publish(event: Event, ...args: any[]) {
        this.emitter.emit(Event[event], ...args)
    }

    static _wireEvents(eventActions: IEventToAction) {
        this.emitter.removeAllListeners()
        for (let event in eventActions) {
            const eventAction = eventActions[event]
            this.emitter.on(event, eventAction)
        }
    }
}
