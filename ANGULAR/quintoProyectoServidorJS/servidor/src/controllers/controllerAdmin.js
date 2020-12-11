const express = require('express');
const jwt = require('jsonwebtoken');
const bd = require('../config/conexionDB');

class ControladorAdmin{
    async mostrar(req, res){
        let sql = `SELECT * FROM user`;
        await bd.query(sql, (req, result, fields) =>{
            res.json(resultado);
        });
    }

    crear(){

    }
}


module.exports = new ControladorAdmin();