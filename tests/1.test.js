const utilities = require('../utilities');

// adding new test
it('should add two numbers', () => {
  var result = utilities.add(33, 11);

  if (result !== 44) {
    throw new Error(`Expected 44, but got ${result}.`)
  }
});

// adding new test
it('should square a number', () => {
  var result = utilities.square(3);

  if (result !== 9) {
    throw new Error(`Expected 9, but got ${result}.`);
  }
});
