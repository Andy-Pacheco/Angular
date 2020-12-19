const conexion = require('../config/conexion');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'mecagoenangular';


const UserController = {};

UserController.getUser = async (req, res) =>{
    let sql = `SELECT * FROM user`;
    await conexion.query(sql, (err, result) =>{
        res.json(result);
    });
};

UserController.login = async (req, res, next) =>{
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    let sql = `SELECT * FROM user WHERE nombre = "${userData.email}"`;
    await conexion.query(sql, (err, user) =>{
        if (err) return res.status(500).send('Server error!');
        if(user.length == 0){
            res.status(409).send({message: 'Something is wrong with email'});
        } else {
            user = user[0];
            if (userData.password == user.pass) {
                const expiresIn = 1 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                const dataUser = {
                    email: user.nombre,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.json({dataUser});
            } else {
                res.status(409).send({message: 'Something is wrong with pass'})
            }
        }
    })
}

UserController.register = (req, res, next) => {
    const newUser = {
        nombre: req.body.email,
        pass: req.body.password
    }

    User.create (newUser, (err, user) =>{
        if (err) return res.status(500).send('Algo va mal con el server');
        const expiresIn = 1 * 60 * 60;
        const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
        res.json({user});
    });
}

module.exports = UserController;