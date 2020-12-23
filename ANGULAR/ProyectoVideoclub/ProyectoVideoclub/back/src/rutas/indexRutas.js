
const express = require('express');
const ruta = express.Router();
const controlador = require('../controladores/controladorIndex');

ruta.get('/', controlador.mostrar);

//ruta.post('/')

module.exports = ruta;