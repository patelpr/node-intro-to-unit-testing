const should = require('chai').should();

const adder = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should modulo input replacing numbers with text if meets case', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            { num: 15, expected: 'fizz-buzz' },
            { num: 3, expected: 'fizz' },
            { num: 5, expected: 'buzz' },
            { num: 2, expected: 2 }
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    });
});