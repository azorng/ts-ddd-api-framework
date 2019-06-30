import 'module-alias/register'
import 'reflect-metadata';
import initInfra from '~/infra/InitInfra'
import Server from '~/ui/Server'

(async () => {
    await initInfra()
    Server.start()
})()
