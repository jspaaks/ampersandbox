var mymodule = require('./mymodule.js');
var Person = require('./Person.js');

var person = new Person({firstName: "John", lastName: "Smith"});
var anotherPerson = new Person({firstName: "Faruk", lastName: "Diblen"});

console.log(person.fullName);
console.log(anotherPerson.fullName);


