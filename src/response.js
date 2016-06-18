
export class ResponseWrapper {
    constructor(response, error) {
        this.response = response || {};
        this._error = error;
    }

    get hasError() {
        return !!this._error;
    }

    get error() {
        return this._error;
    }

    get status() {
        throw new Error('Not implemented');
    }

    get statusType() {
        throw new Error('Not implemented');
    }

    get text() {
        throw new Error('Not implemented');
    }

    get data() {
        throw new Error('Not implemented');
    }

    get headers() {
        throw new Error('Not implemented');
    }

    getCookie() {
        throw new Error('Not implemented');
    }
}


export default ResponseWrapper;
