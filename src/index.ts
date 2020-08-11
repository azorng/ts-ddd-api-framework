import 'module-alias/register'
import 'reflect-metadata'
import { InitInfra } from '~/infra/InitInfra'
import { Server } from '~/ui/http/Server'

InitInfra()
Server.start()
