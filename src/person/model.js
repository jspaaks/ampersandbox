/**
 * PersonModel contains the data describing a person
 * @module person/PersonModel
 */
module.exports = (function () {

    var AmpersandState = require('ampersand-state');

    var props = {
        firstName: {type: "string", required: true, default: undefined},
        lastName: {type: "string", required: true, default: undefined},
        isDancing: {type: "boolean", required: false, default: false}
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
