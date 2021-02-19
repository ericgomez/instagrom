const express = require('express');
const multer = require('multer');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

// Todos los metodos: addMessage, getMessage, updateMessage, deleteMessage vienen desde el 'controller' ->

const upload = multer({
  dest: 'public/files/',
})

// Metodo para consultar 
router.get('/', function (req, res) {
  const filterMessages = req.query.user || null;

  controller.getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch( e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
    
});

// Metodo para registrar
router.post('/', upload.single('file'), function (req, res) {

  controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201 );
    })
    .catch( e => {
      response.error(req, res, 'Informacion invalida', 400, 'Error en el controller');
    })

});

// Metodo para modificar
router.patch('/:id', function (req, res) {

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200 );
    })
    .catch( e => {
      response.error(req, res, 'Error interno', 500, e );
    });

});

// Metodo para eliminar
router.delete('/:id', function (req, res) {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Id ${req.params.id} eliminado`, 200 );
    })
    .catch( e => {
      response.error(req, res, 'Error interno', 500, e );
    });
});


module.exports = router;