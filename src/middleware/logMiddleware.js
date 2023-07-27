const logMiddleware = (req, res, next) => {
    const cekBody = req.headers.user
    if(cekBody == "admin"){
        next();
    }else{
        res.status(401).json({
            message: "Belum login"
          });
    }
}

module.exports = {
    logMiddleware,
}