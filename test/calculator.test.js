// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../calculatorUtils.js';

const test = QUnit.test;

test('test add function', (expect) => {
    const num1 = 1;
    const num2 = 2;
    const sum = 3;
    const result = add(num1, num2);
    expect.equal(result, sum);
});

test('test subtract function', (expect) => {
    const num1 = 1;
    const num2 = 2;
    const total = -1;
    const result = subtract(num1, num2);
    expect.equal(result, total);
});

test('test multiply function', (expect) => {
    const num1 = 4;
    const num2 = 2;
    const total = 8;
    const result = multiply(num1, num2);
    expect.equal(result, total);
});

test('test divide function', (expect) => {
    const num1 = 12;
    const num2 = 2;
    const total = 6;
    const result = divide(num1, num2);
    expect.equal(result, total);
});
