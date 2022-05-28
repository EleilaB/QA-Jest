require(`./functions.js`);
const { returnTwo, greeting, add } = require("./functions");

describe(`These tests validate the functionality of the exported functions in functions.js`, () => {
    test(`returnTwo returns 2`, () => {
        expect(returnTwo()).toEqual(2);
    });
    test(`greeting returns "Hello, name."`, () => {
        expect(greeting(`James`)).toEqual(`Hello, James.`);
        expect(greeting(`Jill`)).toEqual(`Hello, Jill.`);
    });
    test(`add adds num1 and num2 together.`, () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    });
});