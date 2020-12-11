import { Request, Response} from 'express';

import bbdd from '../conexionBBDD';

class ControladorLibros{
    public async mostrar (req:Request, res:Response){
        await bbdd.query(`SELECT * FROM libros`, (err, result, fields) =>{
            res.json(result);
        })
    }

    public async crear (req:Request, res:Response){
        await bbdd.query(`INSERT INTO libros SET ?`, [req.body]);
        res.json({text: 'libro guardado'});
    }

    public async borrar(req:Request, res:Response){
        let id = req.params.id;
        await bbdd.query(`DELETE FROM libros WHERE id=${id}`);
        res.json({text: 'libro borrado'});
    }

    public async actualizar(req:Request, res:Response){
        let id = req.params.id;
        let {autor, titulo, categoria, descripcion, imagen} = req.body;
        await bbdd.query('UPDATE libros SET ? WHERE id=?',[req.body, id]);
    }

    public async filtrar(req:Request, res:Response){
        let id= req.params.id;
        await bbdd.query(`SELECT * FROM libros WHERE id=?`, [id], (error, resultado, fields) =>{
            res.json(resultado);
        })
    }
}

const queryBBDD = new ControladorLibros();

export default queryBBDD;