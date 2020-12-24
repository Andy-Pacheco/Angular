const express = require('express');
const ruta = express.Router();
const adminController = require('../controllers/adminController');

ruta.get('/', adminController.validateAdmin);

module.exports = ruta;