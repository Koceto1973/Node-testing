var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if email already exists

  // testing this got called with correct arguments
  // by blocking the call with a spy in the testing file
  db.saveUser({email, password}); 

  // Send the welcome email
};
