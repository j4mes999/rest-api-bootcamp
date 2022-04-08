function errorHandler(error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
}

module.exports = errorHandler;