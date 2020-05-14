const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const Employee = new Employee('Dave');

    expect(Employee.name).toBe('Dave');
})