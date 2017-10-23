var {PersonModel, PersonView} = require('./person');

var person = new PersonModel({firstName: "John", lastName: "Smith"});

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


