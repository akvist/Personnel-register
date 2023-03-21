const dbConnection = require('../db_connection');
const personnel = dbConnection();


const getPersonnel = ((req,res) => {
    res.status(200).json(personnel); 
});


module.exports = getPersonnel;