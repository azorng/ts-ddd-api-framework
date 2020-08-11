import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export class AuthUtil {
    static authRequired(session: Http.Session) {
        if (!session.auth) {
            throw new Exception(ExceptionCode.NO_SESSION)
        }
        return session.auth
    }
}
