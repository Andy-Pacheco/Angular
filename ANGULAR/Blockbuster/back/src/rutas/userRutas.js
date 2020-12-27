const express = require('express');
const ruta = express.Router();
const userController = require('../controllers/userController');

ruta.get('/', userController.getUsers);
ruta.post('/', userController.validateUser);
ruta.post('/newUser', userController.createUser);
//ruta.put('/:id', userController.updateUser); 
//

module.exports = ruta;