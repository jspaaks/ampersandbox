/**
 * PersonModel contains the data describing a person
 * @module person/PersonModel
 */
module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        firstName: {type: "string", required: true, default: undefined},
        lastName: {type: "string", required: true, default: undefined},
        isDancing: {type: "boolean", required: false, default: false}
    };

    let derived = {
        fullName: {
            deps: ["firstName", "lastName"],
            fn: function () {
                return this.firstName + " " + this.lastName;
            }
        }
    };

    let PersonModel = AmpersandState.extend({
        props,
        derived
    });

    return PersonModel;

})();
