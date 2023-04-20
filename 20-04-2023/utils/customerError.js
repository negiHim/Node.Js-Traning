// customer error class
class CustomeError extends Error {
    constructor(msg, statusCode, status, visitUrl1, visitUrl2) {
        super(msg);
        this.statusCode = statusCode;
        this.status = status;
        this.visitUrl1 = visitUrl1;
        if (visitUrl2 != undefined) {
            this.visitUrl2 = visitUrl2;
        }
    }
}

//export
module.exports = CustomeError;