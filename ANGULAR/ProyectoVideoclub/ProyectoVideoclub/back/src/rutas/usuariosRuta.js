const express = require('express');
const ruta = express.Router();
const controlador = require('../controladores/controladorUsuarios')

// identificamos las distintas solicitudes que nos realizarán mediante servicio HTTP en angular. 
ruta.get('/', controlador.mostrar);
ruta.get('/:id', controlador.filtrarUsuario);
ruta.post('/', controlador.comprobarAcceso);
ruta.post('/nuevo', controlador.nuevoUsuario);
ruta.put('/:id', controlador.modificoUser)
//ruta.put('/:id', controlador.actualizar);



module.exports = ruta;