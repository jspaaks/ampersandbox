var {PersonModel, PersonView} = require('./person');

var personmodel = new PersonModel({firstName: 'John', lastName: 'Smith'});
var personview = new PersonView({
    el: document.body,
    model: personmodel
});

personview.render();

window.setTimeout(function(){personmodel.firstName = "Faruk"}, 5000);
