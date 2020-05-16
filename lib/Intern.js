const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.role = 'Intern';
        this.school = 'test';
    }
}

module.exports = Intern;