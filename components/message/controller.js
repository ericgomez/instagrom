const store = require('./store')
const { socket } = require('../../socket');
const config = require('./../../config');

// Todos los metodos: add, list, updateText, remove vienen desde el 'store' ->


function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => { 
    if (!chat || !user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
      fileUrl = `${config.host}:${config.port}${config.publicRoute}/${config.filesRoute}/` + file.filename;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };
  
    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });
}

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise( async (resolve, reject) => {
    if (!id || !message) {
      reject('Los datos son incorrectos');
      return false;
    }

   const result = await store.updateText(id, message);
   resolve(result);

  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id incorrecto');
      return false;
    }

   store.remove(id)
    .then(() => {
      resolve();
    })
    .catch(e => {
      reject(e)
    })

  });
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};