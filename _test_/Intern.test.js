const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'itt');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@' && '.com'));
    expect(intern.school).toEqual(expect.any(String));
});

test('getRole is overriden to return intern', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com');

    expect(intern.getRole()).toBe('Intern');
});