const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        // case 400: -This was before importing constants-
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message, stackTrace: err.stack
            });
            break;
        // case 404:
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message, stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message, stackTrace: err.stack
            });
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message, stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message, stackTrace: err.stack
            });
        default:
            console.log("No Error, chief!")
            break;
    }

};

module.exports = errorHandler;