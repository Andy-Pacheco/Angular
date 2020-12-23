const express = require('express');
const ruta = express.Router();
const controlador = require('../controladores/controladorPeliculas')

// identificamos las distintas solicitudes que nos realizarán mediante servicio HTTP en angular. 
ruta.get('/', controlador.mostrar);
ruta.get('/:id_usuario', controlador.obtenPeliAlquiladaUser);
ruta.post('/', controlador.guardar);
ruta.delete('/:id', controlador.borrar);
ruta.put('/:id', controlador.actualizar);



module.exports = ruta;