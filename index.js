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
        const name = req.body.name;
        const lastName = req.body.lastName;
        const email = req.body.email;
        
        const newPersonnel = {name: name, lastName: lastName, email: email};   
        const emailCheck = personnel.filter(personnelInfo => personnelInfo.email === email);
        if (emailCheck.length === 0) { personnel.push(newPersonnel); };
        res.json(personnel); 
    });

    app.delete('/api/personnel/delete_personnel', (req, res) => { 
        const email = req.body.email;
        personnel = personnel.filter(personnelInfo => personnelInfo.email !== email)
        res.json(personnel); 
    });

    app.listen(port, () => {console.log(`Listening to port ${port}...`)});

}

main(app);