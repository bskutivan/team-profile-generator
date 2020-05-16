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
        console.log(teamData.employees);
    }
}

initializePrompt()
    .then(employeesPrompt)