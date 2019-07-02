import 'module-alias/register'
import 'reflect-metadata';
import { InitInfra } from '~/infra/InitInfra'
import { Server } from '~/ui/http/Server'

(async () => {
    await InitInfra()
    Server.start()
})()
