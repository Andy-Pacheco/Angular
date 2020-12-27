const conexion = require ('../config/conexion');

class ControladorPeliculas{
    async getPeliculas(req, res){
        let sql = `SELECT * FROM movie`;
        await conexion.query(sql, (req, result, fields)=>{
            res.json(result);
        })
    }

    async crearPeliculas(){}

    async borrarPeliculas(req, res){
        console.log(req.params)
        let id = req.params.id;
        await conexion.query(`DELETE FROM movie WHERE movie_id = ${id}`, (req, result, fields)=>{
            res.json('borrado');
        })
    }
    async actualizarPeliculas(req, res){
        let id = req.params.id;
        let title = req.body.title;
        let director = req.body.director;
        let year = req.body.year;
        //let cover = req.body.cover
        await conexion.query(`UPDATE movie SET 
                                title = '${title}', 
                                director = '${director}',  
                                year = '${year}'
        WHERE movie_id = ${id}`, (req, result, fields)=>{
            res.json('actualizada');
        })
    }

    async guardarPelicula(req, res){
        let title = req.body.title;
        let director = req.body.director;
        let year = req.body.year;
        //let cover = req.body.cover;
        let sql = `INSERT INTO movie (title, director, year) VALUES ('${title}','${director}','${year}')`
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result);
            res.json(result)
        })
    }
}

module.exports = new ControladorPeliculas();