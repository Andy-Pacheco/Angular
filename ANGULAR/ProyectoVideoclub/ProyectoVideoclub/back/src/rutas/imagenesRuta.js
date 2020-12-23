const express = require('express');
const ruta = express.Router();
const upload = require('../config/multer');
// identificamos las distintas solicitudes que nos realizarán mediante servicio HTTP en angular. 
ruta.get('/', (req, res)=>{
    res.send('ruta inicio de imágenes');
});

ruta.post('/', upload.single('imagen'), (req, res)=>{
   
  res.json({nombreImagen:upload.storage.nombreImagen});
});


module.exports = ruta;