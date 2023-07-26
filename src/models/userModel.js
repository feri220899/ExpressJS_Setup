const dbPool = require('../config/connection.js');

// Fungsi untuk mendapatkan semua data pengguna dari database
const getAllUser = () => {
    const querySql = `SELECT * FROM mahasiswa`;
    return dbPool.execute(querySql);
};

// Fungsi untuk mengirimkan data dari controller ke database
const createUser = (body) => {
    const querySql = ` INSERT INTO mahasiswa (nim, nama, kelas, alamat) 
                    VALUES ('${body.nim}', '${body.nama}', '${body.kelas}', '${body.alamat}')`;
    return dbPool.execute(querySql);
}

// Export fungsi getAllUser agar dapat digunakan di tempat lain
module.exports = {
    getAllUser,
    createUser,
};
