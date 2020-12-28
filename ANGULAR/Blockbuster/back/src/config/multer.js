const path = require ('path');
let multer = require('multer');

var storage = multer.diskStorage({
    destination: './src/public/imagenes',
    filename: function (req, file, cb){
        const extension = path.extname(file.originalname);
        this.nombreImagen = Date.now() + extension;
        cb(null, this.nombreImagen )
    }
})

var upload = multer({storage: storage});

module.exports = upload;