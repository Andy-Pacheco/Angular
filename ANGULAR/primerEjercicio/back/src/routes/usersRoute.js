const express = require('express');
const rutas = express.Router();
const userController = require('../controllers/usersController');

rutas.get('/user', userController.getUser);
rutas.post('/login', userController.login);
rutas.post('/register', userController.register);
module.exports = rutas;