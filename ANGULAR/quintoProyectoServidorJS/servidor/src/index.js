const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
var multipart = require('connect-multiparty');
var directorio = multipart({
    uploadDir: './src/public/imagenes'
});
const fs = require('fs');
const path = require('path');

//configuracion del servidor
app.set('puerto', process.env.PORT || 4000);
//app.set(express.json());
//app.set(express.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(cors());

// rutas libros, index, admin
app.use('/', require('./rutas/rutaIndex'));
app.use('/api/libros', require('./rutas/rutaLibros'));
app.use('/api/admin', require('./rutas/rutaAdmin'));
app.use(express.static(path.join(__dirname, '/public')))
app.get('/api/imagen', (req, res) =>{
    res.send(req.files)
})
app.post('/api/imagen', directorio, (req, res) =>{
    let archivo = req.files.imagen;
    let date = new Date();
    let fecha = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
    let nombre = archivo.name;
    console.log('el valor del fichero es ' + archivo.name);
    console.log('el valor de fecha es ' + fecha);
    console.log('el valor del nombre es ' + nombre);
    fs.rename(archivo.path, `src/public/imagenes/${nombre}`, (res, req)=>{
        res =>{
            console.log(res);
        }, error =>console.log(error)
    })
    console.log(archivo)
    console.log(req.files)
    res.send('solicitud post')
})
//lanzar el servidor

app.listen(app.get('puerto'), ()=>{
    console.log(`servidor lanzado en puerto ${app.get('puerto')}`);
});