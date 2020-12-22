const conexion = require ('../config/conexion');
const jwt = require('jsonwebtoken');
const clave = '123456'

class ControladorAdmin{
    async getAdmins(req, res){
        let sql = `SELECT * FROM user WHERE type = 'admin'`;
        //;
        await conexion.query(sql, (req, result, fields)=>{
            console.log(result)
            res.json(result);
        })
    }

    async checkAdmin(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let sql = `SELECT * FROM user WHERE email = "${email}"`;
        await conexion.query(sql, (req, result, fields)=>{
            if (result.length == 0){
                return res.status(401).send('Admin email invalid');
            } else if (password == result[0].password){
                const token = jwt.sign({id: result[0].id}, 'clave');
                return res.status(200).json({token});
            }else{
                return res.status(401).send('Admin password invalid');
            }
        })
    }
}

module.exports = new ControladorAdmin();