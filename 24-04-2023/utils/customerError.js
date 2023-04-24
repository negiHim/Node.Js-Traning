// customer error class
class CustomeError extends Error {
    //constructor to 
    constructor(msg, statusCode, status) {
        super(msg);
        this.statusCode = statusCode;
        this.status = status;
    }
}

//export
module.exports = CustomeError;