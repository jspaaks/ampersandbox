/**
 * [repository/model]{@link module:repository/model} contains the data 
 * describing a repository
 * @module repository/model
 */
module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        id: {type: "number", required: true, default: null},
        name: {type: "string", required: true, default: null},
        language: {type: "string", required: true, default: null}
    };

    let derived = {
        expectedPain: {
            deps: ["language"],
            fn: function () {
                return this.language === "JavaScript" ? "a lot" : "a little";
            }
        }
    };

    let RepositoryModel = AmpersandState.extend({
        props,
        derived
    });

    return RepositoryModel;

})();
