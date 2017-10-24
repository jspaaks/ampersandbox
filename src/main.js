var domready = require('domready');

domready(function () {

    var {PersonModel, PersonView} = require('./person');

    var personmodel = new PersonModel({firstName: 'John', lastName: 'Smith'});
    var personview = new PersonView({
        el: document.getElementById('root'),
        model: personmodel
    });

    window.setTimeout(function(){personmodel.firstName = "Faruk"}, 3000);

});
