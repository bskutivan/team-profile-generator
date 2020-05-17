const generateManagerCard = require('./ManagerHTMLCard');


function generateHTML(data) {
    HTMLArr = [];

    for (let i = 0; i < data.length; i++) {
        const currentEmp = data[i];;
        const role = currentEmp.getRole();

        if (role === 'Manager') {
            const managerHTMLCard = generateManagerCard(currentEmp);

            HTMLArr.push(managerHTMLCard);
        }
    }


}


module.exports = generateHTML