const inquirer = require("inquirer")
const Manager = require('./lib/Manager')

// array to collect team members as they are generated throughout prompting

const team = [];

// prompts broken up into two functions with logic for full app below prompt functions

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
    ]).then((answers) => {
        const {name, id, email, officeNumber} = answers
        const manager = new Manager(name, id, email, officeNumber);
        
        // push the new manager object to team array for card generation
        team.push(manager);

        // initiate next set of inquirer prompts that determine what role of employee is being given
        newEmployeesPrompt();
    })
};

// Asks what the next employee does and directs prompts towards correct function containing specified questions.

function newEmployeesPrompt() {
    
    inquirer.prompt([
        {
            type:'list',
            name: 'role',
            message: 'Are there others on the team? If so choose their roles.',
            choices: ['Engineer', 'Intern', 'Nobody left. Build the team!'],
            validate: roleSelection => {
                if (roleSelection) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then((answers) => {
        const choice = answers.role;
        console.log(choice);
        if (choice === "Engineer") {
            // prompt for Engineer
            console.log('you chose engineer');
        } else if (choice === "Intern") {
            // prompt for Intern
            console.log('you chose intern');
        } else if (choice === "Nobody left. Build the team!") {
            // write the file
            console.log('you chose to write that file!');
        }

    })
}

// logic execution starts here

initializePrompt()