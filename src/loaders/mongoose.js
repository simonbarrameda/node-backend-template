const mongoose = require('mongoose');
const config = require('../config');

const getConnection = async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    // Suppress monngo deprecation warning
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return connection;
};

module.exports = getConnection;
