import express from 'express';
import Router from '~/interfaces/router'
import bodyParser from 'body-parser'

express()
  .disable('x-powered-by')
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', Router())
  .listen(1000)