const express = require('express'); // EXPRESS routes handler
const cors = require('cors'); // HABILITAR O NO REFERENCIAS CRUZADAS (entre aplicaciones)
const { mongoose } = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' })); // consumir api creadda desde localhost4200 (angular), solo los que esten en el cors podran usar mi api
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route.js')); // se llama como el primero param la ruta del segundo param
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
app.use('/api/espectador', require('./routes/espectador.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
