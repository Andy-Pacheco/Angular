var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');


// configuro los parámetros de mi servidor. 
app.set('puerto', process.env.PORT || 3003);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))


// indico las rutas que implementare en mi servdiro. 

const userVista = require('./rutas/userRutas');
const adminVista = require('./rutas/adminRutas');
const peliculaVista = require('./rutas/peliculasRutas');
const imagenesVista = require('./rutas/imagenesRutas');

app.use('/api/admin', adminVista);
app.use('/api/user', userVista);
app.use('/api/peliculas', peliculaVista);
app.use('/api/imagenes', imagenesVista);

// lanzaré el servidor.
app.listen(app.get('puerto'), ()=> {
    console.log(`Servidor lanzado en puerto ${app.get('puerto')}`);
}); 