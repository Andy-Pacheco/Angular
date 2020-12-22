const conexion = require ('../config/conexion');

class ControladorPeliculas{
    async getPeliculas(req, res){
        let sql = `SELECT * FROM movie`;
        await conexion.query(sql, (req, result, fields)=>{
            res.json(result);
        })
    }

    async crearPeliculas(){}
    async borrarPeliculas(){}
    async actualizarPeliculas(){}
}

module.exports = new ControladorPeliculas();