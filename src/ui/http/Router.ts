import _ from '~/lib'

import { Router as ExpressRouter } from 'express'

export const Router = () => {
    let api = ExpressRouter()

    _.filesInsideFolder('routes').forEach((file: string) => {
        api = require(`./routes/${file}`).default(api)
    })

    return api
}