const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const getPersonnel = require('./controllers/get_personnel');
const addPersonnel = require('./controllers/add_personnel');
const deletePersonnel = require('./controllers/delete_personnel');

const dbConnection = require('./database/db_connection');
let personnel = dbConnection();


const main = (app, personnel) => {
    app.get('/personnel', 
        (req, res) => {
            getPersonnel(req, res, personnel);
        }); 
    app.post('/personnel', 
        (req, res) => {
            addPersonnel(req, res, personnel);
        }); 
    app.delete('/api/personnel/:id', 
    (req, res) => {
        deletePersonnel(req, res, personnel);
    });
};

main(app, personnel);
module.exports = app; 