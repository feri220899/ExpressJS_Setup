const dbPool = require('../config/connection.js');

// Fungsi untuk mendapatkan semua data pengguna dari database
const getAllUser = () => {
    const querySql = `SELECT * FROM mahasiswa`;
    return dbPool.execute(querySql);
};

// Fungsi get by nim/id
const getByNim = (nim) => {
    const querySql = `SELECT * FROM mahasiswa WHERE nim=${nim}`;
    return dbPool.execute(querySql);
}

// Fungsi untuk mengirimkan data dari controller ke database
const createUser = (body) => {
    const querySql = ` INSERT INTO mahasiswa (nim, nama, kelas, alamat) 
                    VALUES ('${body.nim}', '${body.nama}', '${body.kelas}', '${body.alamat}')`;
    return dbPool.execute(querySql);
}

// Fungsi untuk update user
const updateUser = (body, nim) =>{
    const querySql = `UPDATE mahasiswa 
        SET nim='${body.nim}', nama='${body.nama}', kelas='${body.kelas}', alamat='${body.alamat}'
        WHERE nim=${nim}`;
    return dbPool.execute(querySql);
}

// Fungsi delete data berdasarkan nim
const deleteUser =  (nim) =>{
    const querySql = `DELETE  FROM mahasiswa WHERE nim=${nim}`;
    return dbPool.execute(querySql);
}

// Export fungsi getAllUser agar dapat digunakan di tempat lain
module.exports = {
    getAllUser,
    getByNim,
    createUser,
    updateUser,
    deleteUser,
};
