const conexion = require ('../config/conexion');


class ControladorImagenes{

    async mostrar(req, res){
        res.send('acceso a imagenes')
    }

    async guardar(req, res){}
}

module.exports = new ControladorImagenes();