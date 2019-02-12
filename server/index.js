const http = require('http');
const app = require('./app');

// see the db connection when the server starts

const dbConnection = require('../db/index');


const port = 2100;
const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log('error listening on port ', port, err);
  } else {
    console.log('successfully listening on port', port);
  }
});
