const conexion = require ('../config/conexion');
const jwt = require('jsonwebtoken');
const clave = '123456';
const bcrypt = require ('bcrypt');


class ControladorAdmin{
    async getAdmins(req, res){
        let sql = `SELECT * FROM user WHERE type = 'admin'`;
        //;
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result)
            res.json(result);
        })
    }

    async validateAdmin(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let sql = `SELECT * FROM user WHERE email = "${email}" AND type = 'admin'`;
        await conexion.query(sql, (req, result, fields)=>{
            if (result.length == 0){
                return res.status(401).send('Admin email invalid');
            } else if (password == result[0].password){
                const token = jwt.sign({id: result[0].id}, clave);
                return res.status(200).json({token: token, id: result[0].id});
            }else{
                return res.status(401).send('Admin password invalid');
            }
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

module.exports = new ControladorAdmin();