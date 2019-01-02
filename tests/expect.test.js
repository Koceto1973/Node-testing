const utilities = require('../utilities');
const expect = require('expect');

// adding new test
it('should expect ...', () => {
  var result = utilities.square(3);

//   if (result !== 9) {
//     throw new Error(`Expected 9, but got ${result}.`);
//   }
        // ok for primitives
    // expect(result).toBe(9);       
    // expect(result).toNotBe(10);

        // for objects
    // expect({name:'John'}).toEqual({name:'John'})
    // expect({name:'John'}).toNotEqual({name:'Johny'})

    // expect(result).toBe(9).toBeA('number');
    // expect(result).toBe(9).toNotBeA('string');

    // expect([1,2,3]).toInclude('1');
    // expect([1,2,3]).toExclude('4');

    // expect({
    //     name:'John',
    //     age:25
    // }).toInclude({age:25});

    // expect({
    //     name:'John',
    //     age:25
    // }).toExclude({job:'dentist'});

});


  