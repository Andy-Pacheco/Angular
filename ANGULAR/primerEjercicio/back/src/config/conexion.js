const mysql = require('mysql');
const db = require('./DB');

const conexion = mysql.createConnection(db.db);
conexion.connect((err, res) =>{
    if (err) throw err;
    console.log('Conexion with DB successful')
});

module.exports = conexion;