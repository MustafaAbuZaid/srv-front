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

// Get dependencies
const express = require('express');
const path = require('path');
var config = require('./config/config');
var proxy = require('http-proxy-middleware');
const app = express();
// app.use(winstonLoggerInstance);
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Set our api routes
app.use('/api/dashboard', proxy({
  target: 'http://' + config.get('externalRepos').folder_structure, 
  pathRewrite: {"^/api/dashboard": "/dashboard"}}));
app.use('/api', proxy({ target: 'http://' + config.get('externalRepos').authentication }));
// app.use('/api/vehicles', proxy({ target: 'http://' + config.get('externalRepos').authentication }));
// app.use('/api/dashboard', proxy({ target: 'http://' + config.get('externalRepos').folder_structure }));
// app.use('/api/customers', proxy({ target: 'http://' + config.get('externalRepos').customers }));
const port = config.get('port');
app.set('port', port);
app.listen(port, () => console.log(`core-frontend running on localhost:${port}`));