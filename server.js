const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db')
const router = require('./network/routes');

db('mongodb+srv://user_chat:RgAzkuF0R27DJ94L@cluster0.tmnrd.mongodb.net/telegrom?retryWrites=true&w=majority')

/*  Abreviatura
req = request
res = response
 */

// Enviar mensaje en formato .json
app.use(bodyParser.json());
// Enviar mensaje en formato Formulario Url Encoded
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

socket.connect(server);

router(app);

app.use('/app', express.static('public')); // Accedemos desde http://localhost:3000/app

server.listen(3000, function () {
  console.log('La aplicación está escuchando en el http://localhost:3000');
});