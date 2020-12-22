const express = require('express');
const ruta = express.Router();
const peliculasController = require('../controllers/peliculasController');

ruta.get('/', peliculasController.getPeliculas);

module.exports = ruta;