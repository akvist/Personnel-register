let personnel = require('../personnel');


const deletePersonnel = ((req,res) => {
    const name = req.body?.name;
    const lastName = req.body?.lastName;
    const email = req.body?.email;

    try {
        const chosenEmployee = personnel.filter(personnelInfo => personnelInfo.email === email);

        if (name === undefined || lastName === undefined || email === undefined) {
            res.status(400).json({message:'No employee was removed from the register. Please enter name, last name and email of employee you want to remove.', result: personnel});
        } else if (chosenEmployee.length === 1) { 
            if (chosenEmployee[0].name === name && chosenEmployee[0].lastName === lastName && chosenEmployee[0].email === email) { 
                personnel = personnel.filter(personnelInfo => personnelInfo.email !== email); 
                res.status(410).json({message:`${name} ${lastName} with email ${email} was removed from the register.`, result: personnel});
            } else {
                res.status(405).json({message:'Employee with given email does not have the name and last name you entered. The employee was therefore not deleted from the register.', result: personnel});
            }
        } else {
            res.status(405).json({message:'Employee with given email does not have the name and last name you entered. The employee was therefore not deleted from the register.', result: personnel});
        };
    
    } catch(error) {
        console.error(error);
    }
});


module.exports = deletePersonnel;