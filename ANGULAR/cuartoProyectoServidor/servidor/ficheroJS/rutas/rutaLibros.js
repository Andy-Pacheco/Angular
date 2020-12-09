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
    }
}
exports.Libreria = Libreria;
const libros = new Libreria();
exports.default = libros.rutaLibros;
