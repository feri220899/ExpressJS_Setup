const dbPool = require('../config/connection.js');

// Fungsi untuk mendapatkan semua data pengguna dari database
const getAllUser = () => {
    const querySql = `SELECT * FROM mahasiswa`;
    return dbPool.execute(querySql);
};

// Fungsi untuk mengirimkan data dari controller ke database
const createUser = (body) => {
    console.log(body);
}

// Export fungsi getAllUser agar dapat digunakan di tempat lain
module.exports = {
    getAllUser,
    createUser,
};
