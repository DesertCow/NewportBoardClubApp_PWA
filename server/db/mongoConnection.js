const mongoose = require('mongoose');

require('dotenv').config();

process.env.MONGODB_URI || 'mongodb://192.168.25.10:28031/',
// var url = "mongodb://192.168.25.10:28031/BoardClub-DB";

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