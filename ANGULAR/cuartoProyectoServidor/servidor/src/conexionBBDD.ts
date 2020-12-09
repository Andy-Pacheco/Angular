import mysql from 'mysql';

import infoBBDD from './config';

const conexion = mysql.createConnection(infoBBDD.bbdd);

conexion.connect((err, result) =>{
    if (err) throw err;
    console.log('Conexion established')
})

export default conexion;