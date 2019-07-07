export class Exception {
    name: string
    message: string
    stack: any

    constructor(exception: Error) {
        this.name = exception.name ? exception.name : 'GENERIC_EXCEPTION'
        this.message = exception.message
        this.stack = new Error().stack
    }
}