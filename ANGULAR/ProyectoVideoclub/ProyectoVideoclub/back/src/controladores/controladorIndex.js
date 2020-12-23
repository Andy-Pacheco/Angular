
class ControladorIndex{
    mostrar(req, res){
        res.send('ruta idnex desde el controaldor');
    }
}

module.exports = new ControladorIndex();