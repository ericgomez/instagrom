const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config')

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db')
const router = require('./network/routes');

db(config.dbUrl)

/*  Abreviatura
req = request
res = response
 */

app.use(cors());

// Enviar mensaje en formato .json
app.use(bodyParser.json());
// Enviar mensaje en formato Formulario Url Encoded
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static('public')); // Accedemos desde http://localhost:3000/app

server.listen(config.port, function () {
  console.log(`La aplicación está escuchando en el ${config.host}:${config.port}`);
});