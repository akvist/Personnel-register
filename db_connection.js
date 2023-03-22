const dbConnection = () => { 
    let personnel = require('./db');
    return personnel;
};

module.exports = dbConnection;