const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const busInfo = require("../api/routes/busInfo")

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // ROUTES
  app.use(bodyParser.json());


  app.use("/busInfo", busInfo);
  return app;
};