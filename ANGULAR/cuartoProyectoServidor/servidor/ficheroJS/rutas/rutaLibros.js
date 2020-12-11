"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libreria = void 0;
const express_1 = require("express");
const controladorLibros_1 = __importDefault(require("../controladores/controladorLibros"));
class Libreria {
    constructor() {
        this.rutaLibros = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.rutaLibros.get('/', controladorLibros_1.default.mostrar);
        this.rutaLibros.delete('/:id', controladorLibros_1.default.borrar);
        this.rutaLibros.post('/', controladorLibros_1.default.crear);
        this.rutaLibros.put('/:id', controladorLibros_1.default.actualizar);
        this.rutaLibros.get('/:id', controladorLibros_1.default.filtrar);
    }
}
exports.Libreria = Libreria;
const libros = new Libreria();
exports.default = libros.rutaLibros;
