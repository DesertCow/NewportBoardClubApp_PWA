const mongoose = require('mongoose');

require('dotenv').config();

process.env.MONGODB_URI || 'mongodb://192.168.25.10:28031/',

console.log(process.env.MONGDB_URI);

mongoose.connect(
  process.env.MONGDB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'BoardClub-DB',
  }
);

module.exports = mongoose.connection;


//!========================= EOF =========================