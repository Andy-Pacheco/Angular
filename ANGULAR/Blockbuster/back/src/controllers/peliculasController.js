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

    async guardarPelicula(req, res){
        let title = req.body.title;
        let director = req.body.director;
        let year = req.body.year;
        let cover = req.body.cover;
        let sql = `INSERT INTO movie (title, director, year) VALUES ('${title}','${director}','${year}')`
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result);
            res.json(result)
        })
    }
}

module.exports = new ControladorPeliculas();