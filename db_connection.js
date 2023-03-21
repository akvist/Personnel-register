const dbConnection = () => { 
    let personnel = require('./database');
    return personnel;
};

module.exports = dbConnection;