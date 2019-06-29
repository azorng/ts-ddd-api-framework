import express from 'express';
import Router from '~/ui/router'
import bodyParser from 'body-parser'
import session from '~/ui/middlewares/session'

express()
  .disable('x-powered-by')
  .use(session)
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', Router())
  .listen(1000)