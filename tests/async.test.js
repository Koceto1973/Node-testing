const utilities = require('../utilities');
const expect = require('expect');

  // incorrect, mocha reports not ok due to not waiting till result
  // it('should square a number', () => {
  //   var result = utilities.asyncSquare(3);  
  //   expect(result).toBe(9).toBeA('number');
  // });
  
// correct, mocha reports ok 
it('should async square a number', (done) => { // done argument tells mocha to wait untill done()
    utilities.asyncSquare(5, (result) => {
      expect(result).toBe(25).toBeA('number');
      done(); // mocha can finish async test
  });
});
  
  