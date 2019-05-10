const { add, subtract, multiply, divide } = require('../src/calculator')
var sum, difference, product, quotient;
sum = add(2,1)
difference = subtract(2,1)
product = multiply(2,1)
quotient = divide(2,0.5)

test('2+1 should be 3', () => {
    expect(sum).toBe(3)
})
test('2-1 should be 1', () => {
    expect(difference).toBe(1)
})
test('2*1 should be 2', () => {
    expect(product).toBe(2)
})
test('2/0.5 should be 4', () => {
    expect(quotient).toBe(4)
})