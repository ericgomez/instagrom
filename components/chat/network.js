const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

// Todos los metodos: addChat, getChat, updateChat, deleteChat vienen desde el 'controller' ->

// Metodo para consultar 
router.get('/:userId', function (req, res) {

  controller.listChats(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch( e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
    
});

// Metodo para registrar
router.post('/', function (req, res) {

  controller.addChat(req.body.users )
    .then((data) => {
      response.success(req, res, data, 201 );
    })
    .catch( err => {
      response.error(req, res, 'Informacion invalida', 500, err );
    })

});


module.exports = router;