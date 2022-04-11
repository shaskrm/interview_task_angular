const express = require('express');
const app = express();
module.exports = function (app) {
 //sentiment analysis route
app.get('/get-dialed-call', (req, res) => {
  var agentdata=[{
     totalcalls:"120",
     callback:"12",
     pending:"100",
     agent1:'50',
     agent2:'70'
  }]
  res.send({
    message: "agentdata listed successfully",
    status: "success",
    data:agentdata
  })
});
}