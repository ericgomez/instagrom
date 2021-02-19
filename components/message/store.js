const db = require('mongoose');
const Model = require('./model');

const uri = 'mongodb+srv://user_chat:RgAzkuF0R27DJ94L@cluster0.tmnrd.mongodb.net/telegrom?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, 
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));


function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};

  if (filterUser !== null) {
    filter = { user: filterUser };
  }

  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  // return list;
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;

}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
/*Nombre controller - Nombre store */
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
}