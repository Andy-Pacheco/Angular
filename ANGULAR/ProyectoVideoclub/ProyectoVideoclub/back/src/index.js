var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');


// configuro los parámetros de mi servidor. 
app.set('puerto', process.env.PORT || 3003);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
// creo ruta pública dónde subiré mis images. 
app.use(express.static(path.join(__dirname,'public')));


// indico las rutas que implementare en mi servdiro. 

const rutaIndex = require('./rutas/indexRutas');
const peliculaVista = require('./rutas/peliculasRutas');
const rutaUsuarios = require('./rutas/usuariosRuta');
const rutaAdmin = require('./rutas/administradorRuta');
const rutaImagenes = require('./rutas/imagenesRuta');
app.use('/', rutaIndex);
app.use('/api/peliculas', peliculaVista);
app.use('/api/usuarios', rutaUsuarios);
app.use('/api/administrador', rutaAdmin);
app.use('/api/imagenes', rutaImagenes);


// lanzaré el servidor.
app.listen(app.get('puerto'), ()=> {
    console.log(`Servidor lanzado en puerto ${app.get('puerto')}`);
}); 