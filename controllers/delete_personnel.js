let personnel = require('../personnel');


const deletePersonnel = ((req,res) => {
    const id = Number(req.params?.id);

    const employeeToRemove = personnel.filter(personnelInfo => personnelInfo.id === id);

    try {
        if (employeeToRemove.length === 0) {
            res.status(400).json({message:`Employee with id ${id} does not exist. No employee was removed from the register.`, result: personnel});
        } else { 
            personnel = personnel.filter(personnelInfo => personnelInfo.id !== id);
            res.status(410).json({message:`Employee with email ${id} was removed from the register.`, result: personnel});
        };
    
    } catch(error) {
        console.error(error);
    }
});


module.exports = deletePersonnel;