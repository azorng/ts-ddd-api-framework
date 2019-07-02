import _ from '~/lib'
import { Router as ExpressRouter } from 'express'

export const Router = () => {
    let api = ExpressRouter()

    _.filesInsideFolder('routes').forEach((route: string) => {
        api = require(`./routes/${route}`).default(api)
    })

    return api
}