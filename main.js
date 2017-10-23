var mymodule = require('./mymodule.js');
var Person = require('./Person.js');

console.log('hello world');

var person1 = new Person();
var person2 = new Person({firstName: "John"});
var person3 = new Person({firstName: "John", lastName: "Smith"});

console.log(person3.lastName);
