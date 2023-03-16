let personnel = require('../personnel');


const addPersonnel = ((req,res) => {
    const name = req.body?.name;
    const lastName = req.body?.lastName;
    const email = req.body?.email;
    const id = personnel[personnel.length-1].id+1;
        
    const newEmployee = {
        id,
        name, 
        lastName, 
        email
    };  

    try {
        const existingEmployeeWithGivenEmail = personnel.filter(personnelInfo => personnelInfo.email === email);

        if (name === undefined || lastName === undefined || email === undefined) {
            res.status(400).json({message:'No employee was added to the register. Please enter name, last name and email of employee you want to add.', result: personnel});
        } else if (existingEmployeeWithGivenEmail.length === 0) { 
            personnel.push(newEmployee); 
            res.status(201).json({message:`${name} ${lastName} with email ${email} was added to the register.`, result: personnel});
        } else {
            res.status(409).json({message:'Employee with given email already exists. The employee was therefore not added to the register.', result: personnel});
        };

    } catch(error) {
        console.error(error);
    };
});


module.exports = addPersonnel;
