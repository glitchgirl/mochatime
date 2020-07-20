// the first test doesn't call another file

var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// this is for testing our main.js

var sum = require('../main.js');
//also using assert

describe('Sum', function (){
    it('should return 4 when the first is 2 and the second is 2', function(){
        assert.equal(sum(2,2),4);
    });
});