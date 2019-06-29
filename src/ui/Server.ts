import express from 'express';
import Router from '~/ui/Router'
import bodyParser from 'body-parser'
import session from '~/ui/middlewares/Session'

express()
  .disable('x-powered-by')
  .use(session)
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', Router())
  .listen(1000)