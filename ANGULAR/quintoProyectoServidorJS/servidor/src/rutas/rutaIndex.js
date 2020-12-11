const express = require('express');
// const { Router } = require('express');
const rutas = express.Router();
const controlladorIndex = require('../controllers/controllerIndex');

rutas.get('/', controlladorIndex.mostrar);

module.exports = rutas;