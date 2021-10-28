const express = require('express');
const {WebhookClient} = require('dialogflow-fulfillment');
const { welcome } = require("./intents/medicine");
const app = express();
// const db = require("./../helper/dbconnectivity");
// const db = require("./helper/dbconnectivity");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Is Working......");
});

/**
* on this route dialogflow send the webhook request
* For the dialogflow we need POST Route.
**/
app.post('/webhook', (req, res) => {
    // get agent from request
    const agent = new WebhookClient({request: req, response: res});
    // create intentMap for handle intent
    let intentMap = new Map();
    // add intent map 2nd parameter pass function
    intentMap.set('Medicine',welcome);
    // intentMap.set('demoTest',demo);
    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap);
});

/**
* server on port number 3000 
* */
app.listen(3000, () => {
    console.log("Server is Running on port 3000");
})