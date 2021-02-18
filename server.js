const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();

// Enviar mensaje en formato .json
app.use(bodyParser.json());
// Enviar mensaje en formato Formulario Url Encoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
  // Enviar mensaje en formato query
  console.log(req.query);
  console.log(req.body);
  res.send('Mensaje ' + req.body.text + ' añadido correctamente');
});

router.delete('/message', function (req, res) {
  res.send('Mensaje eliminado');
});

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

app.listen(3000);
console.log('La aplicación está escuchando en el http://localhost:3000');