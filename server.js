const express = require('express');
const bodyParser = require('body-parser');

// const router = require('./components/message/network');
const router = require('./network/routes');

let app = express();

/*  Abreviatura
req = request
res = response
 */

// Enviar mensaje en formato .json
app.use(bodyParser.json());
// Enviar mensaje en formato Formulario Url Encoded
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

router(app);


app.use('/app', express.static('public')); // Accedemos desde http://localhost:3000/app

app.listen(3000);
console.log('La aplicación está escuchando en el http://localhost:3000');