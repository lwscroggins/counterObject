var counterObject = function () {
  var counter = 0;

  this.increment = function() {
    counter ++
    return counter;
  }

  this.getValue = function() {
    return counter;
  }
}

module.exports = counterObject;
