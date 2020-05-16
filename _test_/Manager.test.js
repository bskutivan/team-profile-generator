const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@' && '.com'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole is overridden to return manager', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com');

    expect(manager.getRole()).toBe('Manager');
});

