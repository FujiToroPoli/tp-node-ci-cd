const addition = require('./index').addition;

test('addition de 1 + 2 = 3', () => {
    expect(addition(1, 2)).toBe(3);
});