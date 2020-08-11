import express from 'express'
import { Router } from '~/ui/http/Router'
import bodyParser from 'body-parser'
import { session } from '~/ui/http/middlewares/Session'
import helmet from 'helmet'
import { env } from '~/config'
import cors from 'cors'
import Logger from '~/infra/Logger'

export class Server {
    public static start() {
        express()
            .use(
                cors({
                    origin: true,
                    credentials: true
                })
            )
            .use(helmet())
            .use(session)
            .use(bodyParser.json())
            .use('/', Router())
            .listen(env.PORT, () => Logger.log(`Server listening on port ${env.PORT}`))
    }
}
