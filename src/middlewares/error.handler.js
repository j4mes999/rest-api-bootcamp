/**
 * Middleware in charge of the error handling
 * @param {error} error 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function errorHandler(error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
}

module.exports = errorHandler;