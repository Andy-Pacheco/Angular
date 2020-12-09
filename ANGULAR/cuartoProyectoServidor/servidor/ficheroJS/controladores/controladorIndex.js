"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControladorIndex {
    inicio(req, res) {
        res.send('ruta de inicio de mi app utilizando controlador');
    }
}
const controladorIndex = new ControladorIndex();
exports.default = controladorIndex;
