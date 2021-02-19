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

async function getMessage() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get
  //update
  //delete
}