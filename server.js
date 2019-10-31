var result;
switch (process.env.NODE_ENV) {
  case "docker":
    result = require('dotenv').config({
      path: './env/.docker.env'
    });
    break;
  default:
    result = require('dotenv').config({
      path: './env/.ci.env'
    });
}
var errorhandler = require("errorhandler");

// Get dependencies
const express = require('express');
const path = require('path');
var config = require('./config/config');
var proxy = require('http-proxy-middleware');
const app = express();
// app.use(winstonLoggerInstance);
// Point static path to dist
app.use(express.static(path.join(__dirname, "dist/srv-front")));
// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/srv-front/index.html"));
});
// Set our api routes
app.use('/api', proxy({ target: 'http://' + config.get('externalRepos').authentication }));
app.use(errorhandler()); //my custom error handler
const port = config.get('port');
app.set('port', port);
app.listen(port, () => console.log(`core-frontend running on localhost:${port}`));