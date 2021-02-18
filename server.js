const express = require('express');
const router = express.Router();

let app = express();

app.use(router);

router.get('/message', function (req, res) {
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
  res.send('Mensaje añadido');
});

router.delete('/message', function (req, res) {
  res.send('Mensaje eliminado');
});

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

app.listen(3000);
console.log('La aplicación está escuchando en el http://localhost:3000');