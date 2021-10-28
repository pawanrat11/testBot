const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const MedicineSchema = require('./../models/medicine-model');
const db = require("./../helper/dbconnectivity");

function welcome(agent) {
    // console.log(agent);
    const text = "dsad";
    let ans;
    const medicineName =  agent.parameters.medicinename[0];
    const medicineInfo =  agent.parameters.medicineinfo[0];
    // MedicineSchema.find((err,document)=> {
    //     console.log(document)
    //     });
    // MedicineSchema.find({ name: 'ยามอร์ฟีน'}, function (err, docs) {console.log(docs);});
    MedicineSchema.findOne({ 'name': medicineName}, function (err, doc) {
        console.log(doc[medicineInfo][0]);
        ans = doc[medicineInfo][0];
       
    });
    console.log("คำตอบ " + ans);
    agent.add(text);

}   


// function answer(agent, ans) {
//     agent.add(ans);
// }


// function demo(agent) {
//     console.log(agent.query);
//     agent.add("demo Test response");
// }
module.exports = { welcome: welcome };