const mongooseLoader = require('./mongoose');
const expressLoader = require('./express');
const log = require('../utils/logger')('loader');

const init = async ({ expressApp }) => {
  await mongooseLoader();
  log.info('Database loaded and connected');

  await expressLoader({ app: expressApp });
  log.info('Express middlewares loaded');
};

module.exports = { init };
