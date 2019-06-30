declare namespace Http {
    type Router = import('express').Router
    type Request = import('express').Request
    type Response = import('express').Response
}

declare namespace Db {
    type Manager = import('typeorm').EntityManager
}