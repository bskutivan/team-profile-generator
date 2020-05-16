const inquirer = require("inquirer")

function initializePrompt() {
    
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'Who is the manager of this team?'
        },
        {
            type:'input',
            name:'id',
            message:'What is their employee id?'
        },
        {
            type:'input',
            name:'email',
            message:'What is their email?'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is their office number?'
        }
    ])

};

initializePrompt()