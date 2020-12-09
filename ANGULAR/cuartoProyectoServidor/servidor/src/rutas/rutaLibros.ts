import { Router } from 'express';

import controladorLibros from '../controladores/controladorLibros';

export class Libreria {
    public rutaLibros:Router;
    constructor(){
        this.rutaLibros = Router();
        this.configuracion();
    }
    configuracion():void{
        this.rutaLibros.get('/', controladorLibros.mostrar)
    }
}

const libros = new Libreria();
export default libros.rutaLibros;