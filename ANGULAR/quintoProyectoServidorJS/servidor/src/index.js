const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

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

//lanzar el servidor

app.listen(app.get('puerto'), ()=>{
    console.log(`servidor lanzado en puerto ${app.get('puerto')}`);
});