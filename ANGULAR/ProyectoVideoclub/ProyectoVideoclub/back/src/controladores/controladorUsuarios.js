const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bd = require('../config/conexionBBDD');

class ControladorUsuario {

    async mostrar(req, res){
        await bd.query('SELECT * FROM usuario', (error, resultado, fields)=>{
            res.json(resultado);
        })
    }

    async nuevoUsuario(req, res){
        console.log(req.body.pass);
        const hash = bcrypt.hashSync(req.body.pass, 10);
        req.body.pass = hash;
        
        await bd.query('INSERT INTO usuario SET ?', [req.body]);
        res.json({text: 'Usuario dado de alta'})
    }

    async filtrarUsuario(req, res){
        const id = req.params.id;
        await bd.query('SELECT * FROM usuario WHERE id=?', [id], (error, resultado, fields)=>{
            //  zona donde descodificar el pass guardado mediante Byscrpt
            res.json(resultado);
        })
    }

    async modificoUser(req, res){
        const id=req.params.id;
        await bd.query('UPDATE usuario SET ? WHERE id=?', [req.body, id]);
        res.json({text: 'Usuario actualizado'})
    }

    async comprobarAcceso(req, res){
        
        const email = req.body.email;
        const password = req.body.password;



        await bd.query('SELECT * FROM usuario WHERE email=?', [email],(error, resultado, fields)=>{
          
           if(resultado.length==0){
              //return res.send('Usuario no válido');
              return res.status(401).send('usuario incorrecto');
           }

           console.log(password);
           
           if(!bcrypt.compareSync(password, resultado[0].pass)){
                return res.status(401).send('pass incorrecto');
           }

           const token = jwt.sign({id: req.body.id}, 'clave');
           return res.status(200).json({token:token, id: resultado[0].id});
        
       });



    }
}

module.exports = new ControladorUsuario();