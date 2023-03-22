const deletePersonnel = ((req,res, personnel) => {
    const id = Number(req.params?.id);
    const employeeToRemove = personnel.filter(personnelInfo => personnelInfo.id === id);

    try {
        if (employeeToRemove.length === 0) {
            res.status(404).json({message:`Employee with id ${id} does not exist. No employee was removed from the register.`, result: personnel});
        } else { 
            personnel = personnel.filter(personnelInfo => personnelInfo.id !== id);
            res.status(200).json({message:`Employee with name ${employeeToRemove[0].name}, lastname ${employeeToRemove[0].lastName} and email ${employeeToRemove[0].email} was removed from the register.`, result: personnel});
        };
    } catch(error) {
        console.error(error);
    };
});


module.exports = deletePersonnel;