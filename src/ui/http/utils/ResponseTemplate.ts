export class ResponseTemplate {
    status: ResponseStatus
    data: any
    #statusCode: number

    constructor(status: ResponseStatus, data: any, statusCode: number) {
        this.status = status
        this.data = data
        this.#statusCode = statusCode
    }

    get code() {
        return this.#statusCode
    }
}

export enum ResponseStatus {
    success = 'success',
    fail = 'fail',
    error = 'error'
}
