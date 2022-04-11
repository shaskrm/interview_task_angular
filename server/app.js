const bodyParser = require('body-parser');
const express = require('express');
var app = express();
const router = express.Router();
const { MongoClient } = require("mongodb");
// Module calling

// Server path
const uri = 'mongodb://localhost:27017/';

// Name of the database
const databaseName = "test";
MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log("Connection failed for some reason");
    }
    console.log("Connection established - All well");
    const db = client.db(databaseName);
  });

app.use(function(req, res, next) {
    req.db = MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(databaseName);
      });
    next();
})
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.setHeader('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
  // Pass to next layer of middleware
  next();
});
const cors = require("cors");
app.use(cors());
require("./routes/agent_performance.js")(app);

// end

var port = process.env.PORT || 2025;

app.listen(port, function() {
    console.log('PORT Connected on: ' + port)
})
