var mymodule = require('./mymodule.js');
var Person = require('./Person.js');
var Car = require('./Car.js');

var person = new Person({firstName: "John", lastName: "Smith"});
var anotherPerson = new Person({firstName: "Faruk", lastName: "Diblen"});

var car = new Car({make: "Alfa Romeo", model: "147", year: 2006, powerKiloWatts: 88})

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


console.log(car.powerHP);
