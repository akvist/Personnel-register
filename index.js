const express = require('express');
const app = express();

const main = (app) => {

   let personnel = [];

    app.get('/api/personnel/get_personnel', (req, res) => {
        res.json(personnel); 
    }); 

    app.listen(300, () => {console.log('Listening to port 3000...')});

}

main(app);