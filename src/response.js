const successRes = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        message: message,
        data: data,
    });
}

const errorRes = (errorMessage, serverMessage, res) => {
    res.status(500).json({
        error: errorMessage,
        serverMessage: serverMessage,
    });
}

module.exports = {
    successRes,
    errorRes,
}