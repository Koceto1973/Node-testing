// all testing functionality is separated in this module

const expect = require('expect');  // spies are part of this module
const rewire = require('rewire');  // rewiring the method subject to testing

var app = rewire('./app');

describe('App', () => {
  
  // this one is just spy functionality tester
  it('should call the spy correctly', () => {
    var spy = expect.createSpy(); // creation of the spy replacer of the real function
    spy('Andrew', 25);            // spy got called, with arguments
    expect(spy).toHaveBeenCalledWith('Andrew', 25); // expect method used to verify spy got called with what
  });  

  var db = {   // the fake db 
    saveUser: expect.createSpy()  // with the spy function in
  };

  app.__set__('db', db); // app.db rewired the local fake db  

  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    // the real test call being rewired to the spy
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password}); // the spy is reporting
  });

});
