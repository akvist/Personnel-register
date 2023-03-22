const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const getPersonnel = require('./controllers/get_personnel');
const addPersonnel = require('./controllers/add_personnel');
const deletePersonnel = require('./controllers/delete_personnel');

const main = (app) => {
    app.get('/personnel', getPersonnel); 
    app.post('/personnel', addPersonnel);
    app.delete('/api/personnel/:id', deletePersonnel);
};

main(app);
module.exports = app; 