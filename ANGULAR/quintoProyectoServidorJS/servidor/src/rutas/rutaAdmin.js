const express = require('express');
// const { Router } = require('express');
const rutas = express.Router();
const controlladorAdmin = require('../controllers/controllerAdmin');

rutas.get('/', controlladorAdmin.mostrar);
rutas.post('/token', controlladorAdmin.comprobar)

module.exports = rutas;