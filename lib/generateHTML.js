const generateManagerCard = require('./ManagerHTMLCard')
const generateEngineerCard = require('./EngineerHTMLCard')
const generateInterCard = require('./InternHTMLCard')


function generateHTML(data) {
    HTMLArr = [];

    for (let i = 0; i < data.length; i++) {
        const currentEmp = data[i];;
        const role = currentEmp.getRole();

        if (role === 'Manager') {
            const managerHTMLCard = generateManagerCard(currentEmp);

            HTMLArr.push(managerHTMLCard);
        }
        if (role === 'Engineer') {
            const engineerHTMLCard = generateEngineerCard(currentEmp);

            HTMLArr.push(engineerHTMLCard);
        }
        if (role === 'Intern') {
            const internHMTLCard = generateInterCard(currentEmp);

            HTMLArr.push(internHMTLCard);
        }
    }

    console.log(HTMLArr);


}


module.exports = generateHTML