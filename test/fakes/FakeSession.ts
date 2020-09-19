import { NotImplementedException } from '~/app/exceptions/NotImplementedException'
import { SessionNamespace } from '~/infra/Session'

export class FakeSessionNamespace implements SessionNamespace {
    [index: string]: any

    get(key: string) {
        return this[key]
    }

    set<T>(key: string, value: T): T {
        this[key] = value
        return value
    }

    run(fn: (...args: any[]) => void) {
        throw new NotImplementedException()
    }

    constructor() {
        this.express = {}
    }
}
