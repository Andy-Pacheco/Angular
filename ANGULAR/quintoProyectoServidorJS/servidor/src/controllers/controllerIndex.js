const express = require('express');

/*let info = {};

info.mostrar = (req, res) =>{
    res.send('Muestro la información desde el controlador')
}

module.exports = info; */

class ControladorIndex{
    mostrar(req, res){
        res.send('Muestro desde función creada dentro de clase controlador index')
    }
}

module.exports = new ControladorIndex();