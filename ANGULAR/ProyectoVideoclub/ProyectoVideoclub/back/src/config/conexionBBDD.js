const mysql = require('mysql');
const bd = require('./infoBBDD');

const conexion = mysql.createConnection(bd.bd);

conexion.connect((error, connection)=> {
    if(error){ 
        throw 'Por favor compruebe la conexión con BBDD'
    }
console.log('conexión a BBDD realizada')
}
);

module.exports = conexion;

