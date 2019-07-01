import 'module-alias/register'
import 'reflect-metadata';
import initInfra from '~/infra/InitInfra'
import Server from '~/ui/http/Server'

(async () => {
    await initInfra()
    Server.start()
})()
