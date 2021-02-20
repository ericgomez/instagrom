const config = {
  dbUrl: process.env.DB_URL || 'mongodb+srv://user_chat:RgAzkuF0R27DJ94L@cluster0.tmnrd.mongodb.net/telegrom?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;