const express = require('express');
const app = express();

const main = (app) => {

    const port = 3000;
    let personnel = [];

    app.get('/api/personnel/get_personnel', (req, res) => {
        res.json(personnel); 
    }); 

    app.listen(port, () => {console.log(`Listening to port ${port}...`)});

}

main(app);