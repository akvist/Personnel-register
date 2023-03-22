const getPersonnel = ((req, res, personnel) => {
    res.status(200).json(personnel); 
});


module.exports = getPersonnel;