"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const rutaindex_1 = __importDefault(require("./rutas/rutaindex"));
const rutaLibros_1 = __importDefault(require("./rutas/rutaLibros"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.rutasAplicacion();
        // this.lanzarServidor();
    }
    configuracion() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    lanzarServidor() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor en ejecución en puerto ${this.app.get('port')}`);
        });
    }
    rutasAplicacion() {
        this.app.use('/', rutaindex_1.default);
        this.app.use('/api/libros', rutaLibros_1.default);
    }
}
const servidor = new Servidor();
servidor.lanzarServidor();
