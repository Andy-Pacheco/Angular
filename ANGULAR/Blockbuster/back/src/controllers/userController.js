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



}

module.exports = new ControladorUser();