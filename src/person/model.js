/**
 * [person/model]{@link module:person/model} contains the data describing a 
 * person
 * @module person/model
 */
module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        firstname: "string",
        lastname: "string",
        isdancing: "boolean"
    };

    let derived = {
        fullName: {
            deps: ["firstname", "lastname"],
            fn: function () {
                return this.firstname + " " + this.lastname;
            }
        }
    };

    let PersonModel = AmpersandState.extend({
        props,
        derived
    });

    return PersonModel;

})();
