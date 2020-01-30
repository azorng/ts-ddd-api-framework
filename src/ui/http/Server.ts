import express from 'express'
import { Router } from '~/ui/http/Router'
import bodyParser from 'body-parser'
import { session } from '~/ui/http/middlewares/Session'
import helmet from 'helmet'
import { env } from '~/config';

export class Server {
    public static start() {
        express()
            .use(helmet())
            .use(session)
            .use(bodyParser.urlencoded({ extended: true }))
            .use('/', Router())
            .listen(env.PORT, () => console.log(`Server listening on port ${env.PORT}`))
    }
}
