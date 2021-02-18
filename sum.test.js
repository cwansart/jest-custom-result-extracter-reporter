const sum = require('./sum')

test('successful sum', () => {
    expect(sum(1, 2)).toBe(3)
})

test('failed sum', () => {
    expect(sum(1, 1)).toBe(3)
})