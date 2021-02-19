const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) { 
  await db.connect(url, 
    { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('[db] Conectada con éxito'))
      .catch(err => console.error('[db]', err));
}

module.exports = connect;