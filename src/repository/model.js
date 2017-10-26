module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        id: {type: "number", required: true, default: undefined},
        name: {type: "string", required: true, default: undefined},
        language: {type: "string", required: true, default: undefined}
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
