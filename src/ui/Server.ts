import express from 'express';
import Router from '~/ui/Router'
import bodyParser from 'body-parser'
import session from '~/ui/middlewares/Session'

export default class Server {
  static start() {
    express()
      .disable('x-powered-by')
      .use(session)
      .use(bodyParser.urlencoded({ extended: true }))
      .use('/', Router())
      .listen(80)
  }
}

