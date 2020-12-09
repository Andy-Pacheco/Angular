"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorIndex_1 = __importDefault(require("../controladores/controladorIndex"));
class RutaInicial {
    constructor() {
        this.rutaInicio = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.rutaInicio.get('/', controladorIndex_1.default.inicio);
    }
}
const rutas = new RutaInicial();
exports.default = rutas.rutaInicio;
