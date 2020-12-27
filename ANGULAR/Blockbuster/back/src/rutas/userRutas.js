const express = require('express');
const ruta = express.Router();
const userController = require('../controllers/userController');

ruta.get('/', userController.getUsers);
ruta.get('/token', userController.verifyToken);
ruta.post('/', userController.validateUser);
ruta.post('/newUser', userController.createUser);
//ruta.put('/:id', userController.updateUser); 
ruta.delete('/:id', userController.deleteUser)

module.exports = ruta;