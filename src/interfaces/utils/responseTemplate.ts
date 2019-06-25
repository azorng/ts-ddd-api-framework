export default class ResponseTemplate {
    response: IResponseTemplate;

    constructor(status: ResponseStatus, data: any) {
        this.response = {
            status,
            data
        }
    }
}

interface IResponseTemplate {
    status: ResponseStatus,
    data: any
}

export enum ResponseStatus {
    success = 'success',
    fail = 'fail',
    error = 'error'
};