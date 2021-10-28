/** 
 * Connecting to mongoDB
 * */

 const mongoose = require('mongoose')

 const url = `mongodb+srv://SeniorCancerPain:cancerpain101@cluster0.oxwa3.mongodb.net/cancerpain?retryWrites=true&w=majority`;
 
 const connectionParams={
     useNewUrlParser: true
 }
 const db = mongoose.connect(url,connectionParams)
     .then( () => {
         console.log('Connected to database ')
         const collections = Object.keys(mongoose.connection.collections);
         console.log("collection " + collections);
     })
     .catch( (err) => {
         console.error(`Error connecting to the database. \n${err}`);
     })

     
     

// var MongoClient = require('mongodb').MongoClient;
// const url = `mongodb+srv://SeniorCancerPain:cancerpain101@cluster0.oxwa3.mongodb.net/cancerpain?retryWrites=true&w=majority`

// const db = MongoClient.connect(url);
// console.log("connect")
// module.exports = db;