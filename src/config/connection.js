
const mysql = require('mysql2') // ini untuk memanggil modul atau paketnya
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}) // ini untuk membuat koneksinya
module.exports = dbPool.promise();// ini umntuk mengexportnya agar bisa di pakai di luar