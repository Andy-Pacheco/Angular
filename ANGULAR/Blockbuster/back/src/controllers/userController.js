const express = require('express');
const conexion = require ('../config/conexion');
const jwt = require ('jsonwebtoken');

class ControladorUser{
    async getUsers(req, res){
        let sql = `SELECT * FROM user WHERE type = 'user'`;
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result)
            res.json(result);
        })
    }

    async validateUser(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let sql = `SELECT * FROM user WHERE email = '${email}'`;
        await conexion.query(sql, (req, result, fields)=>{
            if (result.length == 0){
                return res.status(400).send('El email es incorrecto');
            }else if (result[0].password != password){
                return res.status(400).send('La contraseña es incorrecta')
            }
            res.json(result);
        })
    }

    async createUser(req, res){
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let avatar = req.body.avatar;
        await conexion.query(`INSERT INTO user (name, email, password, type) values ('${name}', '${email}', '${password}', 'user')`, (error, resultado, fields)=>{
            res.json(resultado);
        })
    }



}

module.exports = new ControladorUser();