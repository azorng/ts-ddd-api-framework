import express from 'express'
import { Router } from '~/ui/http/Router'
import bodyParser from 'body-parser'
import { session } from '~/ui/http/middlewares/Session'

export class Server {
    public static start() {
        express()
            .disable('x-powered-by')
            .use(session)
            .use(bodyParser.urlencoded({ extended: true }))
            .use('/', Router())
            .listen(80)
    }
}
