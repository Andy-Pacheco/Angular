const express = require('express');
const jwt = require('jsonwebtoken');
const bd = require('../config/conexionDB');

class ControladorAdmin{
    async mostrar(req, res){
        let sql = `SELECT * FROM user`;
        await bd.query(sql, (req, result, fields) =>{
            res.json(result);
        });
    }

    async comprobar(req, res){
        const nombre = req.body.name;
        const pass = req.body.pass;

        await bd.query(`SELECT * FROM user WHERE nombre = ? AND pass=?`, [nombre, pass], (error, resultado, fields) =>{
          
            if (resultado.length == 0){
                return res.status(401).send('Usuario incorrecto');
            }
            if (resultado[0].pass !== pass){
                return res.status(401).send('Password incorrecto');
            }
            const token = jwt.sign({id: req.body.id}, 'clave');
            res.json({token});
       })

    }
}


module.exports = new ControladorAdmin();