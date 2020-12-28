const express = require('express');
const ruta = express.Router();
const upload = require ('../config/multer');

ruta.get('/', (req, res)=>{
    res.send('estamos en get imagenes')
})
ruta.post('/', upload.single('imagen'), (req, res)=>{
    res.json({nombreImagen: upload.storage.nombreImagen})
})

module.exports = ruta;