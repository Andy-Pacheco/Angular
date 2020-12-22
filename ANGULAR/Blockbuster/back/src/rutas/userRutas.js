const express = require('express');
const ruta = express.Router();
const userController = require('../controllers/userController');

ruta.get('/', userController.getUsers);

module.exports = ruta;