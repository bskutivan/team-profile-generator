const generateManagerCard = require('./ManagerHTMLCard')
const generateEngineerCard = require('./EngineerHTMLCard')
const generateInterCard = require('./InternHTMLCard')


function generateHTML(data) {

    // an array to hold the HTML cards produced for each employee tipe
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
    // Joining the individual string cards to one giant string of multiple cards
    const HTMLCardString = HTMLArr.join('')

    // Then the string of HTML Cards is passed into the generateFinalPage function
    // where it is put into the final HTML page and returned as a string
    
    completedHTMLString = generateFinalPage(HTMLCardString);

    console.log(completedHTMLString);
    return completedHTMLString;
}

function generateFinalPage(HTMLCardString) {
    return`
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Go Team</title>
  </head>
  <body>
    
    <header class="bg-danger p-5 mb-5 text-white d-flex justify-content-center">
 
        <h1 class="display-6">My Team</h1>

    </header>

    <div class="container">
        <div class="row">
            ${HTMLCardString}
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
`
}


module.exports = generateHTML