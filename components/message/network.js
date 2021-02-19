const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  controller.getMessage()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch( e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
    
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

router.patch('/:id', function (req, res) {

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200 );
    })
    .catch( e => {
      response.error(req, res, 'Error interno', 500, e );
    });

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