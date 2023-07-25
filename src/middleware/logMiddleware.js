const logMiddleware = (req, res, next) => {
    const cekBody = req.headers.user
    if(cekBody == "admin"){
        next();
    }else{
        res.json({
            message: "Header salah"
        })
    }
}

module.exports = {
    logMiddleware,
}