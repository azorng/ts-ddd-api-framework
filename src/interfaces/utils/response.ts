export default class Response {
    status: string;
    body: any;

    constructor(status: string, res: any) {
        this.status = status
        this.body = res
    }

    get response() {
        return {
            status: this.status,
            body: this.body
        }
    }
}