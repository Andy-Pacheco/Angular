const User = require('../dao/auth.dao');
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

UserController.login = (req, res, next) =>{
    const UserData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({email: userData.email}, (err, user) =>{
        if (err) return res.status(500).send('Server error!');
        if(!user){
            res.status(409).send({message: 'Something is wrong with email'});
        } else {
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                const dataUser = {
                    name: user.name,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({dataUser});
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
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
        res.send({user});
    });
}

module.exports = UserController;