const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/img');
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        const origiNalname = file.originalname;

        callback(null, `${time}-${origiNalname}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3 mb
    }
});
module.exports = {
    upload
}