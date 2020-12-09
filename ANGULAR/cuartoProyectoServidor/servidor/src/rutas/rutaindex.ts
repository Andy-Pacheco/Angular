import { Router } from 'express';

import controladorIndex from '../controladores/controladorIndex';

class RutaInicial {

    public rutaInicio:Router;

    constructor(){
        this.rutaInicio = Router();
        this.configuracion();
    }

    private configuracion():void{
        this.rutaInicio.get('/', controladorIndex.inicio);
    }
}

const rutas = new RutaInicial();
export default rutas.rutaInicio;
