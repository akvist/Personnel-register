const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let personnel = require('../personnel');


const getPersonnel = ((req,res) => {
    res.status(200).json(personnel); 
});


module.exports = getPersonnel;