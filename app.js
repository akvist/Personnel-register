const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const main = (app) => {

    let personnel = [
        {name: 'name1', lastName: 'lastName1', email: 'email1'}, 
        {name: 'name2', lastName: 'lastName2', email: 'email2'},
        {name: 'name3', lastName: 'lastName3', email: 'email3'}
    ];

    app.get('/api/personnel/get_personnel', (req, res) => {
        res.status(200).json(personnel); 
    }); 

    app.post('/api/personnel/add_personnel', (req, res) => { 
        const name = req.body?.name;
        const lastName = req.body?.lastName;
        const email = req.body?.email;
        
        const newPersonnel = {
            name, 
            lastName, 
            email
        };  

        try {
            const emailCheck = personnel.filter(personnelInfo => personnelInfo.email === email);

            if (name === undefined || lastName === undefined || email === undefined) {
                res.status(400).json(personnel); //404?
            }
            else if (emailCheck.length === 0) { 
                personnel.push(newPersonnel); 
                res.status(201).json(personnel);
            } else {
                res.status(405).json(personnel);
            };

        } catch(error) {
            console.error(error);
        }
        
    });

    app.delete('/api/personnel/delete_personnel', (req, res) => { 
        const name = req.body?.name;
        const lastName = req.body?.lastName;
        const email = req.body?.email;

        const chosenEmployee = personnel.filter(personnelInfo => personnelInfo.email === email);

        if (name === undefined || lastName === undefined || email === undefined) {
            res.status(400).json(personnel);
        }
        else if (chosenEmployee.length === 1) { 
            if (chosenEmployee[0].name === name && chosenEmployee[0].lastName === lastName && chosenEmployee[0].email === email) { 
                personnel = personnel.filter(personnelInfo => personnelInfo.email !== email); 
                res.status(410).json(personnel);
            } else {
                res.status(405).json(personnel)
            }
        } else {
            res.status(405).json(personnel)
        };
    });

}

main(app);
module.exports = app; 