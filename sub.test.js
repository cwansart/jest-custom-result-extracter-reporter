const sub = require('./sub')

test('successful substraction', () => {
    expect(sub(2, 1)).toBe(3)
})

test('failed substraction', () => {
    expect(sub(1, 1)).toBe(1)
})