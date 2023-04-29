
// this function for customerHandler
const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        statusCode: err.statusCode,
        status: err.status,
        message: err.message,
    });
    next();
};

//export
module.exports = errorHandlerMiddleware;
