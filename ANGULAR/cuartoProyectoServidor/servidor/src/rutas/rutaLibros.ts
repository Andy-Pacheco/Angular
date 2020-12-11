import { Router } from 'express';

import queryBBDD from '../controladores/controladorLibros';

export class Libreria {
    public rutaLibros:Router;
    constructor(){
        this.rutaLibros = Router();
        this.configuracion();
    }
    configuracion():void{
        this.rutaLibros.get('/', queryBBDD.mostrar);
        this.rutaLibros.delete('/:id', queryBBDD.borrar);
        this.rutaLibros.post('/', queryBBDD.crear);
        this.rutaLibros.put('/:id', queryBBDD.actualizar);
        this.rutaLibros.get('/:id', queryBBDD.filtrar )
    }
}

const libros = new Libreria();
export default libros.rutaLibros;