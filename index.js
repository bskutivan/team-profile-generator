const inquirer = require("inquirer")

function initializePrompt() {

    console.log (`
    > lets build the team!
    `);
    
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'What is their employee id?',
            validate: idInput => {
                if (idInput > 0) {
                    return true;
                } else {
                    console.log('Please enter their employee number.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is their email?',
            validate: emailInput => {
                if (emailInput.includes("@") && emailInput.includes(".com")) {
                    return true;
                } else {
                    console.log("Please input their email. It must include '@' and '.com'.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is their office number?',
            validate: officeNumberInput => {
                if (officeNumberInput > 0) {
                    return true;
                } else {
                    console.log('Please input their office number.');
                    return false;
                }
            }
        }
    ])
};

const employeesPrompt = teamData => {
    if (!teamData.employees) {
        teamData.employees = [];
    }
    return inquirer.prompt([
        {
            type:'list',
            name: 'role',
            message: 'What is their role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type:'input',
            name:'name',
            message: 'What is their name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'What is their employee id?',
            validate: idInput => {
                if (idInput > 0) {
                    return true;
                } else {
                    console.log('Please enter their employee number.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is their email?',
            validate: emailInput => {
                if (emailInput.includes("@") && emailInput.includes(".com")) {
                    return true;
                } else {
                    console.log("Please input their email. It must include '@' and '.com'.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'github',
            message: 'What is their github username?',
            when: ({ role }) => {
                if (role != "Engineer") {
                    return false;
                } else {
                    return true;
                }
            } 
                
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are they attending?',
            when: ({ role }) => {
                if (role != 'Intern') {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLoop',
            message: 'Would you like to add anyone else?',
            default: false
        }
    ])
    .then(employeeData => {
        teamData.employees.push(employeeData);
        if (employeeData.confirmLoop) {
            return employeesPrompt(teamData);
        } else {
            return teamData;
        }
    });
}

initializePrompt()
    .then(employeesPrompt)
    .then(teamData => {
        console.log(teamData);
    })