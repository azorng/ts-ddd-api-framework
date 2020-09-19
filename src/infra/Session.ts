import cls from 'cls-hooked'

export interface SessionNamespace {
    set<T>(key: string, value: T): T
    get(key: string): any
    run(fn: (...args: any[]) => void): void
}

export class Session {
    static namespace: SessionNamespace = cls.createNamespace('session')

    static set auth(value: number) {
        this.namespace.set('auth', value)
        if (this.express) this.express.auth = value
    }

    static get auth() {
        return this.namespace.get('auth') as number
    }

    static set express(value: Express.Session | undefined) {
        this.namespace.set('express', value)
    }

    static get express() {
        return this.namespace.get('express') as Express.Session
    }
}
