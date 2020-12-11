const express = require('express');
const rutas = express.Router();

const controlladorLibros = require('../controllers/controllerLibros');

rutas.get('/', controlladorLibros.mostrar);
rutas.get('/:id', controlladorLibros.filtrar);
rutas.post('/', controlladorLibros.crear);
rutas.delete('/:id', controlladorLibros.borrar);
rutas.put('/:id', controlladorLibros.actualizar)


module.exports = rutas;