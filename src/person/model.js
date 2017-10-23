module.exports = (function () {

    var AmpersandState = require('ampersand-state');

    var props = {
        firstName: "string",
        lastName: "string",
        isDancing: "boolean"
    };

    var derived = {
        fullName: {
            deps: ["firstName", "lastName"],
            fn: function () {
                return this.firstName + " " + this.lastName;
            }
        }
    };

    var PersonModel = AmpersandState.extend({
        props, 
        derived
    });

    return PersonModel;

})();
