var chai = require('chai');
var expect = chai.expect;
var counterObject = require('../counterObject.js');

describe('counterObject works', function() {
  var myCounter = new counterObject();

  it('should start with a count of 0', function(done) {
    expect(myCounter.getValue()).to.eql(0);
    done();
  })

  it('should increment the count by 1', function(done) {
    expect(myCounter.increment()).to.eql(1);
    done();
  })

  it('should display the value of the counterObject', function(done) {
    myCounter.increment();
    expect(myCounter.getValue()).to.eql(2);
    done();
  });
});
