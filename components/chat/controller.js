const store = require('./store')

// Todos los metodos: add, list, updateText, remove vienen desde el 'store' ->

function addChat(users) {
    if (!users || !Array.isArray(users)) {
      return Promise.reject('Los datos son incorrectos');
    }
    const chat = {
      users: users,
    };
  
    return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}

module.exports = {
  addChat,
  listChats,
};