const mysql = require('mysql');
const bd = require('./db');

const conexion = mysql.createConnection(bd.db);
conexion.connect((error, connection) =>{
    if(error) throw error;
    console.log('Connection with DB successful');
})

module.exports = conexion;