import express, {Application} from 'express';

import rutaInicio from './rutas/rutaindex';
import rutaLibros from './rutas/rutaLibros';

class Servidor {

    public app:Application;

    constructor(){
        this.app = express();
        this.configuracion();
        this.rutasAplicacion();
        // this.lanzarServidor();
    }

    private configuracion():void{
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    public lanzarServidor():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Servidor en ejecución en puerto ${this.app.get('port')}`)
        });
    }

    public rutasAplicacion(){
        this.app.use('/', rutaInicio);
        this.app.use('/api/libros', rutaLibros);
    }
}
const servidor = new Servidor();
servidor.lanzarServidor();