const express = require('express');
const conexion = require ('../config/conexion');
const jwt = require ('jsonwebtoken');
const clave = '123456';
const bcrypt = require ('bcrypt');

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
        let sql = `SELECT * FROM user WHERE email = '${email}' AND type = 'user'`;
        await conexion.query(sql, (req, result, fields)=>{
            if (result.length == 0){
                return res.status(400).send('El email es incorrecto');
            }else if (result[0].password != password){
                return res.status(400).send('La contraseña es incorrecta')
            }
            const token = jwt.sign({id: result[0].id}, clave);
            return res.status(200).json({token: token, id: result[0].id});
        })
    }

    async createUser(req, res){
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        const hash = bcrypt.hashSync(password, 10)
        let avatar = req.body.avatar;
        await conexion.query(`INSERT INTO user (name, email, password, type) values ('${name}', '${email}', '${password}', 'user')`, (error, resultado, fields)=>{
            res.json(resultado);
        })
    }

    async deleteUser(req, res){
        console.log(req.params)
        let id = req.params.id;
        await conexion.query(`DELETE FROM user WHERE user_id = ${id}`, (req, result, fields)=>{
            res.json('borrado');
        })
    }

    verifyToken = (req, res, next) => {
        
        const token = req.body.token;
        console.log(token)
        if (!token){
            res.json({tokenOk: false})
        };
        //metodo de jwt verify con token y clave secreta
        const decoded = jwt.verify(token, clave, (err, result)=>{
            if (err) {
                console.log("El error es", err)
                res.json({tokenOk: false})
            }
            next();
        })
        
        res.json({tokenOk: true});
    }



}

module.exports = new ControladorUser();