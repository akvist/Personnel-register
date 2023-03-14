let personnel = require('../personnel');


const getPersonnel = ((req,res) => {
    res.status(200).json(personnel); 
});


module.exports = getPersonnel;