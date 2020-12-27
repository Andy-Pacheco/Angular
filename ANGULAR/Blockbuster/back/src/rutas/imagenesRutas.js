const express = require('express');
const ruta = express.Router();
const controladorImagenes = require ('../controllers/imagenesController.js');

ruta.get('/', controladorImagenes.mostrar)
ruta.post('/', controladorImagenes.guardar)

module.exports = ruta;