const { CustomAPIerror } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIerror){
        return res.status(err.statusCode).json({msg: err.mssg});
    }
    return res.status(500).json({ message: err.message });
}


module.exports = errorHandlerMiddleware;