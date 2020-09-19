import { Session } from '~/infra/Session'

describe('continuation-local-storage', () => {
    it('should run in thread mode', () => {
        Session.namespace.run(() => {
            Session.auth = 1
            expect(Session.auth).toBe(1)
        })

        expect(Session.auth).toBe(undefined)

        Session.namespace.run(() => {
            expect(Session.auth).toBe(undefined)
        })
    })
})