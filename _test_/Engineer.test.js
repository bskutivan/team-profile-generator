const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@' && '.com'));
    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('getRold is overriden to return engineer', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com');

    expect(engineer.getRole()).toBe('Engineer');
})