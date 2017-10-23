var AmpersandState = require('ampersand-state');

var personProps = {
    firstName: "string",
    lastName: "string"
};

var Person = AmpersandState.extend({props: personProps});

console.log('hello world');

var person1 = new Person();
var person2 = new Person({firstName: "John"});
var person3 = new Person({firstName: "John", lastName: "Smith"});

console.log(person3.lastName);
