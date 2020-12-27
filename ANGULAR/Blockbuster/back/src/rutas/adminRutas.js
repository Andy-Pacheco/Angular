const express = require('express');
const ruta = express.Router();
const adminController = require('../controllers/adminController');

ruta.post('/', adminController.validateAdmin);
ruta.post('/token', adminController.verifyToken);

module.exports = ruta;