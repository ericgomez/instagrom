const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

// Todos los metodos: addUser, getUser, updateUser, deleteUser vienen desde el 'controller' ->

// Metodo para consultar 
router.get('/', function (req, res) {
  const filterName = req.query.name || null;

  controller.getUser(filterName)
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch( e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
    
});

// Metodo para registrar
router.post('/', function (req, res) {

  controller.addUser(req.body.name )
    .then((data) => {
      response.success(req, res, data, 201 );
    })
    .catch( err => {
      response.error(req, res, 'Informacion invalida', 500, err );
    })

});


module.exports = router;