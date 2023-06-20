const mongoose = require('mongoose');

require('dotenv').config();

// process.env.MONGODB_URI || 'mongodb://192.168.25.10:27017/SaltLickTruck-DB',

mongoose.connect(
  process.env.MONGDB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Board-Club-App-DB',
  }
);

module.exports = mongoose.connection;


//!========================= EOF =========================