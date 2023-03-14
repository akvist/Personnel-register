const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const getPersonnel = require('./controllers/get_personnel');
const addPersonnel = require('./controllers/add_personnel');
const deletePersonnel = require('./controllers/delete_personnel');

const main = (app) => {
    app.get('/api/personnel/get_personnel', getPersonnel); 
    app.post('/api/personnel/add_personnel', addPersonnel);
    app.delete('/api/personnel/delete_personnel', deletePersonnel);
}

main(app);
module.exports = app; 