const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '', id, email) {
        super(name, id, email);

        this.role = 'Manager',
        this.officeNumber = 1;
    }
}

module.exports = Manager;