
const bd = require('../config/conexionBBDD');

class ControladorPeliculas {

    async mostrar(req, res){
        await bd.query('SELECT * FROM peliculas', (error, resultado, fields)=>{
            console.log(fields);
            res.json(resultado);
        })
    }

    async guardar(req, res){
        await bd.query('INSERT INTO peliculas SET ?', [req.body]);
        res.json({texto: 'guardo película en BBDD'});
    }

     async borrar(req, res){
         const id = req.params.id;
         await bd.query('DELETE FROM peliculas WHERE id=?', [id]);
         res.json({texto: 'borro la película indicada con id '+id});

    }
    
    async actualizar(req, res){
        const id = req.params.id;
        let date = new Date();
        let fecha = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
        req.body.fecha = fecha;
        await bd.query('UPDATE peliculas SET ? WHERE id=?', [req.body, id]);
        res.json({texto: 'se actualiza la película indicada con id '+id});
    }

    async obtenPeliAlquiladaUser(req, res){
        const id_user = req.params.id_usuario;
       
        await bd.query('SELECT * FROM peliculas WHERE id_usuario=?', [id_user], (error, resultado, fields)=>{
            res.json(resultado);
        });
    }

}

module.exports = new ControladorPeliculas();