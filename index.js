const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const main = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    const port = 3000;
    let personnel = [];

    app.get('/api/personnel/get_personnel', (req, res) => {
        res.json(personnel); 
    }); 

    app.post('/api/personnel/add_personnel', (req, res) => { 
        const newPersonnel = {name: 'x', lastName: 'y', email: 'z'};
        personnel.push(newPersonnel);
        res.json(personnel); 
    });

    app.delete('/api/personnel/delete_personnel', (req, res) => { 
    });

    app.listen(port, () => {console.log(`Listening to port ${port}...`)});

}

main(app);