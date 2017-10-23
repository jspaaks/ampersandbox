var mymodule = require('./mymodule.js');
var Person = require('./Person.js');

var person = new Person({firstName: "John", lastName: "Smith"});
var anotherPerson = new Person({firstName: "Faruk", lastName: "Diblen"});

console.log(person.fullName);
console.log(anotherPerson.fullName);

// watch it
person.on('change:isDancing', function () {
    if (this.isDancing === true) {
        console.log(this.fullName + " is dancing the night away.")
    } else {
        console.log(this.fullName + " is taking a break from dancing.")
    }
});

// set the value and the callback will fire
person.isDancing = true;