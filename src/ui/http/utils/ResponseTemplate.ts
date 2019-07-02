export class ResponseTemplate {
    status: ResponseStatus
    data: any

    constructor(status: ResponseStatus, data: any) {
        this.status = status
        this.data = data
    }
}

export enum ResponseStatus {
    success = 'success',
    fail = 'fail',
    error = 'error'
};