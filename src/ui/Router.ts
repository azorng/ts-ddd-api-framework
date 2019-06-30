import _ from '~/lib'

import { Router } from 'express'

export default () => {
    let api = Router()

    _.filesInsideFolder('routes').forEach((file: string) => {
        api = require(`./routes/${file}`).default(api)
    })

    return api
}