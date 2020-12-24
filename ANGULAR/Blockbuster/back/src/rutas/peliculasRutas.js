const express = require('express');
const ruta = express.Router();
const peliculasController = require('../controllers/peliculasController');

ruta.get('/', peliculasController.getPeliculas);
ruta.post('/', peliculasController.guardarPelicula);
ruta.delete('/:id', peliculasController.borrarPeliculas);
ruta.put('/:id', peliculasController.actualizarPeliculas);

module.exports = ruta;