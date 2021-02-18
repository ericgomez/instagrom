const express = require('express');

const response = require('./../../network/response');

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
  // Enviar mensaje en formato query
  console.log(req.query);
  if (req.query.error === "ok") {
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores' ); 
  } else {
    // res.send('Mensaje ' + req.body.text + ' añadido correctamente');
    response.success(req, res, 'Añadido correctamente', 201 );
  }

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