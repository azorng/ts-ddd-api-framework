declare namespace Http {
    type Router = import('express').Router
    type Request = import('express').Request
    type Response = import('express').Response
    type Session = Express.Session & { auth: number /* current user id */ }
}
