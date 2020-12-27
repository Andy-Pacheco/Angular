let multer = require('multer');
let conexion = require('./conexion');
var storage = multer.diskStorage({
    destination: './src/public/imagenes',
    filename: function (req, file, cb){
        const extension = file.originalname.slice(
            file.originalname.lastIndexOf('.')
        );
        cb(null, Date.now() + extension);
    }
})

module.exports = storage;