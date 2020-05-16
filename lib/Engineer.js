const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.role = 'Engineer',
        this.gitHub = gitHub;
    }
}

module.exports = Engineer