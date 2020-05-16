const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', id, email) {
        super(name, id, email);

        this.role = 'Engineer',
        this.gitHub = 'test';
    }
}

module.exports = Engineer