const inquirer = require("inquirer")

function initializePrompt() {
    
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'What is the employees name?'
        },
        {
            type:'input',
            name:'id',
            message:'What is the employees id?'
        },
        {
            type:'input',
            name:'email',
            message:'What is the employees email?'
        },
        {
            type:'list',
            name:'role',
            message:'What is the employees role?',
            choices:['Manager', 'Engineer', 'Intern']
        },

    ]).then(answers => {
        return answers
    });

};

initializePrompt()