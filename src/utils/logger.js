const debug = require('debug');
const path = require('path');

const getLoggerInstance = fileUrl => {
  const filename = path.basename(fileUrl, '.js');
  const error = debug(`[ERROR][${filename}]`);
  const warn = debug(`[WARN][${filename}]`);
  const info = debug(`[INFO][${filename}]`);
  const debugLevel = debug(`[DEBUG][${filename}]`);
  const silly = debug(`[SILLY][${filename}]`);

  return {
    error,
    warn,
    info,
    debug: debugLevel,
    silly,
  };
};

module.exports = getLoggerInstance;
