const express = require('express');
const ruta = express.Router();
const controlador = require('../controladores/controladorAdmin')

// identificamos las distintas solicitudes que nos realizarán mediante servicio HTTP en angular. 
ruta.get('/', controlador.mostrar);
ruta.post('/', controlador.comprobarAcceso);
//ruta.post('/nuevo', controlador.nuevoAdmin);
//ruta.put('/:id', controlador.actualizar);



module.exports = ruta;