const express = require('express');
const app = express();
app.use(express.json());

const diff = require('dialogflow-fulfillment'); // dialogflow FF
// var mongo = require('mongodb'); // mongoDB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// const request = require("request-promise");
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// Connect to the db

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cancerpain");
  dbo.createCollection("test", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

app.get('/', (req, res) => {
  res.send('Hello World T')
});

app.post('/', (req, res) => {
  const agent = new diff.WebhookClient({
    request: req,
    response: res
  });
  
  function demo(agent){
    agent.add("send from webhook");
  }
  
  var intentMap = new Map();
  intentMap.set('webhookDemo', demo);
  agent.handleRequest(intentMap);
});

  //Test get value of WebhookClient
  // console.log('agentVersion: ' + agent.agentVersion);
  // console.log('intent: ' + agent.intent);
  // console.log('locale: ' + agent.locale);
  // console.log('query: ', agent.query);
  // console.log('session: ', agent.session);

app.listen(3000, () => {
  console.log('Start server at port 3000.')
});