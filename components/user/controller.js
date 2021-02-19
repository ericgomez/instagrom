const store = require('./store')

// Todos los metodos: add, list, updateText, remove vienen desde el 'store' ->

function addUser(name) {
    if (!name ) {
      return Promise.reject('Los datos son incorrectos');
    }
    const user = {
      name,
    };
  
    return store.add(user);
}

function getUser(filterName) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterName));
  });
}

module.exports = {
  addUser,
  getUser,
};