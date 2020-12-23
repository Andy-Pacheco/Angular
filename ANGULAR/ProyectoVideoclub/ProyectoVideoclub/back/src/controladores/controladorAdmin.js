const jwt = require('jsonwebtoken');
const bd = require('../config/conexionBBDD');

class ControladorAdmin {

    async mostrar(req, res){
        await bd.query('SELECT * FROM administrador', (error, resultado, fields)=>{
            res.json(resultado);
        })
    }
    async nuevoAdmin(req, res){
        await bd.query('INSERT INTO administrador SET ?', [req.body]);
        res.json({text: 'Usuario dado de alta'})
    }

    async comprobarAcceso(req, res){
         const email = req.body.email;
         const password = req.body.password;
         await bd.query('SELECT * FROM administrador WHERE email=?', [email],(error, resultado, fields)=>{

            console.log(resultado);
            if(resultado.length==0){
               return res.send('Usuario no válido');
               // return res.status(401).send('usuario incorrecto');
            }
            
            if(resultado[0].pass !== password){
                return res.send('Password no válido');
            }

            const token = jwt.sign({id: req.body.id}, 'clave');
            return res.status(200).json({token:token, id: resultado[0].id});
            
        });

    }
}

module.exports = new ControladorAdmin();