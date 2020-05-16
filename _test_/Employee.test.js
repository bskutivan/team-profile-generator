
const Employee = require('../lib/Employee');


test('create an employee object', () => {
    
    const employee = new Employee('Dave', 1, 'test@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@' && '.com'));
});

test('getName method returns the name', () => {
    const employee = new Employee('Dave', 1, 'test@gmail.com');

    expect(employee.getName()).toBe(employee.name);
});

test('getEmail method returns the email', () => {
    const employee = new Employee('Dave', 1, 'test@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test('getRole method returns the role', () => {
    const employee = new Employee('Dave', 1, 'test@gmail.com');

    expect(employee.getRole()).toBe(employee.role);
})