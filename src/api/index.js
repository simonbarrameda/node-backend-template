const { Router } = require('express');
const hello = require('./routes/hello');

module.exports = () => {
  const app = Router();
  hello(app);
  return app;
}
