const express = require('express');
const conexion = require ('../config/conexion');

class ControladorUser{
    async getUsers(req, res){
        let sql = `SELECT * FROM user WHERE type = 'user'`;
        //;
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result)
            res.json(result);
        })
    }

    async validateUser(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let sql = `SELECT * FROM user WHERE email = '${email}' AND password='${password}'`;
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result)
            res.json(result);
        })
    }



}

module.exports = new ControladorUser();