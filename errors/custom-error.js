class CustomAPIerror extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}


const createCustomeError = (mssg, statusCode) => {
    return  new CustomAPIerror(mssg, statusCode);
}


module.exports = { createCustomeError, CustomAPIerror};