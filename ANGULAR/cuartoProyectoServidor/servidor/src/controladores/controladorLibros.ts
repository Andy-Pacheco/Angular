import { Request, Response} from 'express';

import bbdd from '../conexionBBDD';

class ControladorLibros{
    public async mostrar (req:Request, res:Response){
        await bbdd.query(`SELECT * FROM libros`, (err, result, fields) =>{
            res.json(result);
        })
    }
}

const queryBBDD = new ControladorLibros();

export default queryBBDD;