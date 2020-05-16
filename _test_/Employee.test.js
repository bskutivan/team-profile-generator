
const Employee = require('../lib/Employee');


test('create an employee object', () => {
    
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
});