const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  // res.send('Lista de mensajes');
  response.success(req, res, 'Lista de mensajes' );
});

router.post('/', function (req, res) {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201 );
    })
    .catch( e => {
      response.error(req, res, 'Informacion invalida', 400, 'Error en el controller');
    })

});

router.delete('/', function (req, res) {
  // res.send('Mensaje eliminado');
  /*****    Status: 201     ******/
  // res.status(201).send( { error: '', body: 'Eliminado Correctamente' } ); // Enviar un Objeto en respuesta
  res.status(201).send( [ { error: '', body: 'Eliminado Correctamente' } ] ); // Enviar un Array en respuesta
});

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

module.exports = router;