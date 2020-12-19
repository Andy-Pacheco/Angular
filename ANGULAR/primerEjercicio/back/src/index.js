//librerias
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


//configurar el server
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());

//rutas
app.use('/', require('./routes/usersRoute'));

//lanzar server
app.listen(app.get('port'), ()=>{
    console.log(`Server conexion succesfull at port ${app.get('port')}`)
});